import { User } from "./user.interface";

export interface CommonResponse {
  data: User[];
  success: boolean;
  token: string;
}
