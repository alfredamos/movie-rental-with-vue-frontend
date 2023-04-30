<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type AuthUserDto from "@/components/models/auth/auth-user.model";
import type ChangePasswordDto from "@/components/models/auth/change-password.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import ChangePasswordForm from "@/components/forms/auth/ChangePasswordForm.vue";
import type CurrentUserDto from "@/components/models/auth/current-user.model";

const router = useRouter();

const authUser = apiContext.getAuthUser();

const userCurrent = ref<CurrentUserDto>(authUser.user!);

const oldAuthInfo = ref<ChangePasswordDto>({
  email: userCurrent?.value?.email,
  password: "",
  newPassword: "",
  confirmPassword: ""
})

const changePasswordSubmit = (changePasswordDto: ChangePasswordDto) => {
  console.log("changePassword, changePasswordDto : ", changePasswordDto);

  ApiAuth.changePassword(changePasswordDto)
  .then((resp) => {   
    apiContext.updateAuthUser$(resp.data);

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
  <ChangePasswordForm
  v-if="oldAuthInfo"
  :oldAuthInfo="oldAuthInfo"
  @onBackToList="backToList"
  @onChangePasswordSubmit="changePasswordSubmit"
  />
</template>


