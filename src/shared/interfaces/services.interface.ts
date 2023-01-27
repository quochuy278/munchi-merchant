export interface UpdateParameter {
  orderId: number;
  prepTime: string;
}

export interface RejectObject {
  orderId: number;
}

export interface SignUpData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export interface SignInData {
  email: string;
  password: string;
}
export interface ValidateResult {
  isValidated: boolean;
  message: string;
}
