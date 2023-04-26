<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type EditProfileDto from "@/components/models/auth/edit-profile.model";
import type AuthUserDto from "@/components/models/auth/auth-user.model";
import type CurrentUserDto from "@/components/models/auth/current-user.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import EditProfileForm from "@/components/forms/auth/EditProfileForm.vue";

const router = useRouter();

const authUser = ref<AuthUserDto>(null!);
const currentUser = ref<CurrentUserDto>(null!)
currentUser.value = apiContext.getAuthUser().user!
console.log({currentUser});

const oldProfile = ref<EditProfileDto>({
     ...currentUser.value,     
     password: "",
     newPassword: ""
})

const editProfileSubmit = (editProfileDto: EditProfileDto) => {
  console.log("editProfile, editProfileDto : ", editProfileDto);

  ApiAuth.editProfile(editProfileDto)
  .then((resp) => {
    authUser.value = resp.data;

    apiContext.updateAuthUser$(authUser.value);

    router.push("/");
  })
  .catch(err => console.log("error : ", err.message)
  )
};

const backToList = () => {
      router.push("/")
}
</script>

<template>
  <EditProfileForm
  v-if="oldProfile"
  :oldProfile="oldProfile"
  @onBackToList="backToList"
  @onEditProfileSubmit="editProfileSubmit"
  />
</template>


