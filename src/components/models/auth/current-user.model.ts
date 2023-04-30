import type Gender from "@/enum/gender.enum";
class CurrentUserDto{
      id!: string;
      name!: string;
      email!: string;
      phone!: string;
      gender!: Gender;
      isGold?: boolean;
}

export default CurrentUserDto