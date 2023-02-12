import { Preferences } from '@capacitor/preferences'

export interface UpdateParameter {
    orderId: number
    prepTime: string
}

export interface RejectObject {
    orderId: number
}

export interface SignUpData {
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
}

export interface SignInData {
    email: string
    password: string
}
export interface ValidateResult {
    isValidated: boolean
    message: string
}

export type PreferencesData =  PreferencesBusinessData | PreferencesAuthenticateData
   
export type PreferencesAuthenticateData = {
    publicUserId: string | null,
    verifyToken: string | null
}


export type PreferencesBusinessData = {
    name: string | null,
    publicBusinessId: string | null
}
