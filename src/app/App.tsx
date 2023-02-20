import { GetResult, Preferences } from '@capacitor/preferences'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { BusinessPage, DetailPage, ErrorPage, MainPage, SignInPage, SignUpPage } from '../pages'
import { PreferencesBusinessData } from '../shared/interfaces/services.interface'
import { LoginState } from '../shared/interfaces/user.interface'
import { RootState } from '../store'
import { displayError } from '../utils/displayError'
import { isObjectEmpty } from '../utils/isObjectEmpty'
import ProtectedRoutes from '../utils/protectedRoutes'

import './App.css'

function App() {
    const navigate = useNavigate()
    const [data, setData] = useState<any>({})
    const { loginState } = useSelector((state: RootState) => state.auth)
    const { businessData, isLocked } = useSelector((state: RootState) => state.business)
    const getPreferenceData = async () => {
        const loginStateObject: any = await Preferences.get({ key: 'loginState' })
        const preferenceLoginState: LoginState = JSON.parse(loginStateObject.value)
        if (!preferenceLoginState) {
            return {}
        } else {
            return preferenceLoginState
        }
    }
    const redirectControllerService = (
        isAuthenticated: boolean,
        business: boolean,
        isLocked: boolean
    ) => {
        switch (true) {
            case isAuthenticated:
                return navigate('/business', { replace: true })
            case isAuthenticated && business:
                console.log('should run this after select business')
                return navigate('/', { replace: true })
            default:
                return navigate('/signin', { replace: true })
        }
    }
    let isAuthenticatedVar: boolean
    let business: boolean

    if (!isObjectEmpty(loginState) && businessData.length > 0) {
        isAuthenticatedVar = data.isAuthenticated
        business = true
    } else if (!isObjectEmpty(data) && data.businessName !== null) {
        isAuthenticatedVar = data.isAuthenticated
        business = true
    } else if (!isObjectEmpty(loginState)) {
        isAuthenticatedVar = loginState.isAuthenticated as boolean
        business = false
    } else if (!isObjectEmpty(data)) {
        isAuthenticatedVar = data.isAuthenticated
        business = false
    } else {
        isAuthenticatedVar = false
        business = false
    }
    console.log(isAuthenticatedVar)
    useEffect(() => {
        document.title = 'Munchi Dashboard'
        const setAuthDataFromPeference = async () => {
            const data = await getPreferenceData()
            setData(data)
        }
        setAuthDataFromPeference()
        redirectControllerService(isAuthenticatedVar, business, isLocked)
        if (isObjectEmpty(loginState) && isObjectEmpty(data))
            return navigate('/signin', { replace: true })
    }, [loginState, isAuthenticatedVar, isLocked, business])
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoutes
                        isAuthenticated={isAuthenticatedVar}
                        redirectPath={'/signin'}
                    />
                }
            >
                <Route
                    path="/detail"
                    element={
                        <Layout isAuthenticated={isAuthenticatedVar}>
                            <DetailPage />
                        </Layout>
                    }
                >
                    <Route path="/detail/:detailId" element={<DetailPage />} />
                </Route>
            </Route>
            <Route
                path="/"
                element={
                    <ProtectedRoutes isAuthenticated={isAuthenticatedVar}>
                        <Layout isAuthenticated={isAuthenticatedVar && business}>
                            <MainPage />
                        </Layout>
                    </ProtectedRoutes>
                }
            />

            <Route
                path="/business"
                element={
                    <ProtectedRoutes isAuthenticated={isAuthenticatedVar} redirectPath={'/signin'}>
                        <BusinessPage loginData={loginState && data} />
                    </ProtectedRoutes>
                }
            ></Route>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
export default App
