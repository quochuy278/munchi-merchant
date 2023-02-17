import { GetResult, Preferences } from '@capacitor/preferences'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { BusinessPage, DetailPage, ErrorPage, MainPage, SignInPage, SignUpPage } from '../pages'
import { PreferencesBusinessData } from '../shared/interfaces/services.interface'
import { LoginState } from '../shared/interfaces/user.interface'
import { RootState } from '../store'
import { displayError } from '../utils/displayError'
import ProtectedRoutes from '../utils/protectedRoutes'

import './App.css'

function App() {
    const navigate = useNavigate()
    
    const [authState, setAuthState] = useState<any>({})
    const { isAuthenticated, loginState } = useSelector((state: RootState) => state.auth)
    const { businessData } = useSelector((state: RootState) => state.business)
    const getAuthenticateState = async () => {
        const loginStateObject: any = await Preferences.get({ key: 'loginState' })
        const preferenceLoginState: LoginState = JSON.parse(loginStateObject.value)
        console.log('App state level preference loginstate', preferenceLoginState)
        if (JSON.stringify(loginState) !== '{}') {
            setAuthState(loginState)
        } else if (preferenceLoginState) {
            setAuthState(preferenceLoginState)
        } else {
            // move to sign in page in loginState and preference store
            navigate('/signin', { replace: true })
        }
    }
    let isAuthenticatedVar: boolean
    const business = !!loginState.businessName || !!authState.businessName
    if (JSON.stringify(loginState) !== '{}') {
        isAuthenticatedVar = isAuthenticated
    } else {
        isAuthenticatedVar = authState.isAuthenticated
    }
    useEffect(() => {
        try {
            getAuthenticateState()
        } catch (error) {
            displayError(error)
        }
        if (isAuthenticatedVar && business) {
            navigate('/', { replace: true })
        } else if (isAuthenticatedVar) {
            navigate('/business', { replace: true })
        } else {
            navigate('/signin', { replace: true })
        }
    }, [isAuthenticatedVar, business])
    return (
        <Routes>
            <Route
                element={<ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath={'/signin'} />}
            >
                <Route path="/detail" element={<DetailPage />}>
                    <Route path="/detail/:detailId" element={<DetailPage />} />
                </Route>
                <Route path="/business" element={<BusinessPage />} />
            </Route>
            <Route
                path="/"
                element={
                    <ProtectedRoutes
                 
                        isAuthenticated={isAuthenticatedVar && business}
                    >
                        <MainPage />
                    </ProtectedRoutes>
                }
            />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
export default App
