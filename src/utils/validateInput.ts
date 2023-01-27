import { ValidateResult } from "../shared/interfaces/services.interface";

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

// export function validateSignUpData(email:unknown, password:unknown):ValidateResult{

//     return true
// }
