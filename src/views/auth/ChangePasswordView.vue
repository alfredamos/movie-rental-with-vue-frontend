<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type AuthUserDto from "@/components/models/auth/auth-user.model";
import type ChangePasswordDto from "@/components/models/auth/change-password.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import ChangePasswordForm from "@/components/forms/auth/ChangePasswordForm.vue";

const router = useRouter();

const authUser = ref<AuthUserDto>(null!);

const changePasswordSubmit = (changePasswordDto: ChangePasswordDto) => {
  console.log("changePassword, changePasswordDto : ", changePasswordDto);

  ApiAuth.changePassword(changePasswordDto)
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
  <ChangePasswordForm
  @onBackToList="backToList"
  @onChangePasswordSubmit="changePasswordSubmit"
  />
</template>


