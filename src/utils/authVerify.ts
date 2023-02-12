import { GetResult, Preferences } from "@capacitor/preferences";
import { useNavigate } from "react-router-dom";

const parseJwt = (token:string) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

export const AuthVerify = async (key:string) => {
    const navigate = useNavigate()
    const dataObject:GetResult = await Preferences.get({key:key})
    const token:string = dataObject.value!
    console.log(token)
}