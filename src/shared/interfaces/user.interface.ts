export interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
}
export interface UserObject {
  id: number;
  name: string;
  lastName: string;
  email: string;
  level: number;
  session: Session;
  verifyToken: string;
}
