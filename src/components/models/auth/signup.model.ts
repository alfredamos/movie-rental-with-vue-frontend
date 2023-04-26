import type UserType from "@/enum/user-type.enum";
class SignupDto {
  name!: string;
  email!: string;
  gender!: string;
  phone!: string;
  password!: string;
  confirmPassword!: string;
  departmentId!: number;
  userTyPe?: UserType;
  dateOfBirth?: Date;
}

export default SignupDto