import { UUID } from "crypto";

export interface User {
  id: UUID;
  name: string;
  email: string;
  roles: Array<string>;
  permissions: Array<string>;
  status: boolean;
  create_at: Date;
}

export interface Token {
  name: string;
  email: string;
  sub: string;
  role: string;
  iat: number;
  exp: number;
  jti: string;
}
