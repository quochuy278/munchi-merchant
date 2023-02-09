import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DetailPage, ErrorPage, SignInPage, MainPage, SignUpPage, BusinessPage } from '../pages'
import { RootState } from '../store'
import ProtectedRoutes from '../utils/protectedRoutes'

import './App.css'

function App() {
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)
    const { businessData } = useSelector((state: RootState) => state.business)
    console.log('🚀 ~ file: App.tsx:12 ~ App ~ businessData', businessData)

    useEffect(() => {
        console.log('🚀 ~ file: App.tsx:18 ~ App ~ isAuthenticated', isAuthenticated)
        if (businessData.length >= 1) {
            navigate('/')
        }
    }, [businessData])
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
                        isAuthenticated={isAuthenticated && businessData.length >= 1}
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
