import { GetResult, Preferences } from '@capacitor/preferences'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { BusinessPage, DetailPage, ErrorPage, MainPage, SignInPage, SignUpPage } from '../pages'
import { PreferencesBusinessData } from '../shared/interfaces/services.interface'
import { RootState } from '../store'
import ProtectedRoutes from '../utils/protectedRoutes'

import './App.css'

function App() {
    const navigate = useNavigate()
    const [business, setBusiness] = useState('')
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)
    const { businessData } = useSelector((state: RootState) => state.business)
    // console.log('🚀 ~ file: App.tsx:12 ~ App ~ businessData', businessData)

    useEffect(() => {
        // console.log('🚀 ~ file: App.tsx:18 ~ App ~ isAuthenticated', isAuthenticated)
        const getBusinessData = async () => {
            const businessData: GetResult = await Preferences.get({ key: 'businessData' })
            const { value } = businessData
            if (!value) {
                return
            } else {
                const data: PreferencesBusinessData = JSON.parse(businessData.value!)
                setBusiness(data.publicBusinessId as string)
            }
        }
        getBusinessData()
        if (businessData.length < 1) {
            navigate('/signin')
        } else if (businessData.length === 1 || business) {
            navigate('/')
            console.log(isAuthenticated, business, 'this is app state')
        }
    }, [businessData, business])

    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath="/signin" />
                }
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
                        redirectPath="/business"
                        isAuthenticated={isAuthenticated && business}
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
