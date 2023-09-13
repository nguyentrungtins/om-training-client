import { User } from "next-auth";

export interface CommonResponse {
  data: User[];
  success: boolean;
  token: string;
}
