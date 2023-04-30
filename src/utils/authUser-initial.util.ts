import type AuthUserDto from "@/components/models/auth/auth-user.model";
import type CurrentUserDto from "@/components/models/auth/current-user.model";
import Gender from "@/enum/gender.enum";
import UserType from "@/enum/user-type.enum";

export const initialCurrentUser: CurrentUserDto = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: Gender.Male,
};

export const initialAuthUser: AuthUserDto = {
  user: initialCurrentUser,
  id: "",
  name: "",
  isLoggedIn: false,
  message: "Not yet Logged-in",
  userType: UserType.Customer,
};


