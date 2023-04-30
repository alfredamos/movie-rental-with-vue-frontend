<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type EditProfileDto from "@/components/models/auth/edit-profile.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import EditProfileForm from "@/components/forms/auth/EditProfileForm.vue";
import type CurrentUserDto from '../../components/models/auth/current-user.model';

const router = useRouter();

const userCurrent = ref<CurrentUserDto>(apiContext.getAuthUser().user!)


const oldProfile = ref<EditProfileDto>({
  ...userCurrent.value,
  password: "",
  newPassword: "",
});

const editProfileSubmit = (editProfileDto: EditProfileDto) => {

  ApiAuth.editProfile(editProfileDto)
    .then((resp) => {
      apiContext.updateAuthUser$(resp.data);

      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};

const backToList = () => {
  router.push("/");
};
</script>

<template>
  <EditProfileForm
    v-if="oldProfile"
    :oldProfile="oldProfile"
    @onBackToList="backToList"
    @onEditProfileSubmit="editProfileSubmit"
  />
</template>
