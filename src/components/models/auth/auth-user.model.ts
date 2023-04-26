import type CurrentUserDto from "./current-user.model";
import type UserType from "@/enum/user-type.enum";

class AuthUserDto {
  id!: string;
  name!: string;
  userType!: UserType;
  token?: string;
  message?: string;
  isLoggedIn?: boolean;
  user?: CurrentUserDto;
}

export default AuthUserDto;
