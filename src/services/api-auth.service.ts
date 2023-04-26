import type ChangePasswordDto from "@/components/models/auth/change-password.model";
import type EditProfileDto from "@/components/models/auth/edit-profile.model";
import type LoginDto from "@/components/models/auth/login.model";
import type SignupDto from "@/components/models/auth/signup.model";
import Axios from "@/interceptors/axios.interceptor"
import authUrl from "@/urls/auth.urls";

class ApiAuth {
  static changePassword(changePasswordDto: ChangePasswordDto) {
    return Axios.patch(authUrl.changePasswordUrl, changePasswordDto);
  }

  static editProfile(editProfileDto: EditProfileDto) {
    return Axios.patch(authUrl.editProfileUrl, editProfileDto);
  }

  static login(loginDto: LoginDto) {
    return Axios.post(authUrl.loginUrl, loginDto);
  }

  static signup(signupDto: SignupDto) {
    return Axios.post(authUrl.signupUrl, signupDto);
  }
}

export default ApiAuth;
