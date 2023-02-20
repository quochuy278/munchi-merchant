import { Preferences } from "@capacitor/preferences";

const setLocalState = async (verifyToken: string): Promise<void> => {
  const saveToken = await Preferences.set({
    key: "verifyToken",
    value: verifyToken,
  });
  return saveToken
};
export default setLocalState;
