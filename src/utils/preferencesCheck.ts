import { GetResult, Preferences } from '@capacitor/preferences'
import { PreferencesData } from '../shared/interfaces/services.interface';
import { store } from '../store'
import { setAuthenticated } from '../store/auth-slice'

export async function preferencesCheck(key: string) {
    const PreferencesData: GetResult = await Preferences.get({ key: key });
    const isAuthneticatedCheck = !!PreferencesData.value
    console.log("🚀 ~ file: preferencesCheck.ts:9 ~ preferencesCheck ~ isAuthneticatedCheck", isAuthneticatedCheck)
    const PreferencesValue = JSON.parse(PreferencesData.value!)
    console.log("🚀 ~ file: preferencesCheck.ts:11 ~ preferencesCheck ~ PreferencesValue", PreferencesValue)
    
    if (isAuthneticatedCheck) {
        store.dispatch(setAuthenticated(isAuthneticatedCheck))}
    else store.dispatch(setAuthenticated(false))
    return PreferencesValue
}