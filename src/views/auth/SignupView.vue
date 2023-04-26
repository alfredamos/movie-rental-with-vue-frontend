<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import type AuthUserDto from "@/components/models/auth/auth-user.model";
import type SignupDto from "@/components/models/auth/signup.model";

const router = useRouter();

const authUser = ref<AuthUserDto>(null!);
const signupSubmit = (signupDto: SignupDto) => {
  console.log("signup, signupDto : ", signupDto);

  ApiAuth.signup(signupDto)
    .then((resp) => {
      authUser.value = resp.data;

      apiContext.updateAuthUser$(authUser.value);

      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};

const backToList = () => {
  router.push("/");
};
</script>

<template>
  <SignupForm @onBackToList="backToList" @onSignupSubmit="signupSubmit" />
</template>
