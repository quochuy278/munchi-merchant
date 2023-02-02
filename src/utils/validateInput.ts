import { ValidateResult } from "../shared/interfaces/services.interface";
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export function validateSignInData(
  email: unknown,
  password: unknown
): ValidateResult {
  switch (true) {
    case !email || !password:
      return {
        isValidated: false,
        message: "Something wrong happend",
      };
    case typeof email === "string" &&
      typeof password === "string" &&
      email.length < 4:
      return {
        isValidated: false,
        message: "Please enter a correct email",
      };
    case typeof email === "string" &&
      typeof password === "string" &&
      password.length < 4:
      return {
        isValidated: false,
        message: "Password is too short",
      };
    case typeof email === "string" &&
      typeof password === "string" &&
      email.length >= 6 &&
      password.length >= 7:
      return {
        isValidated: true,
        message: "Validated",
      };

    default:
      return {
        isValidated: false,
        message: "Something wrong happend",
      };
  }
}
export const signInSchema = object({
  email: string().email('Email is invalid'),
  password: string()
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});


export const signUpSchema = object({
  name: string()
    .max(32, 'Name must be less than 100 characters'),
  email: string().email('Email is invalid'),
  password: string()
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().nonempty('Please confirm your password'),
  terms: literal(true, {
    invalid_type_error: 'Accept Terms is required',
  }),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});
