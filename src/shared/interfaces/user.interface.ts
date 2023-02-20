export interface Session {
    access_token: string
    token_type: string
    expires_in: number
}
export interface UserObject {
    publicId: number
    name: string
    lastName: string
    email: string
    level: number
    session: Session
    verifyToken: string
}

export type LoginState = {
    isAuthenticated: boolean | null
    publicUserId: string | null
    publicBusinessId: string | null
    verifyToken: string | null
    businessName: string | null
}
