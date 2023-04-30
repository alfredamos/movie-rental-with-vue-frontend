import type Gender from "@/enum/gender.enum";
import type UserType from "@/enum/user-type.enum";
class EditProfileDto {
  name!: string;
  email!: string;
  phone!: string;
  gender!: Gender; 
  password!: string;
  newPassword!: string;
  userTyPe?: UserType;
}

export default EditProfileDto