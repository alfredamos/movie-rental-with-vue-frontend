import type AuthUserDto from "@/components/models/auth/auth-user.model";
import type CurrentUserDto from "@/components/models/auth/current-user.model";
import Gender from "@/enum/gender.enum";
import UserType from "@/enum/user-type.enum";

export const initialCurrentUser: CurrentUserDto = {
  id: "",
  fullName: "",
  email: "",
  phone: "",
  departmentId: "",
  gender: Gender.Male,
  dateOfBirth: new Date(),
};

export const initialAuthUser: AuthUserDto = {
  user: initialCurrentUser,
  id: "",
  fullName: "",
  isLoggedIn: false,
  message: "Not yet Logged-in",
  userType: UserType.Customer,
};


