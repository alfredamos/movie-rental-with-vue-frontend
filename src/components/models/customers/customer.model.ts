import type Gender from "@/enum/gender.enum";
import type UserType from "@/enum/user-type.enum";

export default class CustomerDto{
      id = "";
      name!: string;
      email!: string;
      gender?: Gender;      
      phone!: string;
      isGold = false;
      password!: string;
      userType?: UserType;
}