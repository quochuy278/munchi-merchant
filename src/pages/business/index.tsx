import { GetResult, Preferences } from '@capacitor/preferences'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BusinessDialog from '../../components/business/dialog/BusinessDialog'
import BusinessList from '../../components/business/list'
import MainContent from '../../components/container/MainContent'
import { LoadingSpinner } from '../../components/customcomponents'
import { BusinessData } from '../../shared/interfaces/business.interface'
import {
    PreferencesAuthenticateData,
    PreferencesData,
} from '../../shared/interfaces/services.interface'
import { LoginState } from '../../shared/interfaces/user.interface'
import { AppDispatch, RootState } from '../../store'
import { setAuthenticated, setLogoutState } from '../../store/auth-slice'
import { useGetBusinessByNameQuery } from '../../store/services-slice'
import { displayError } from '../../utils/displayError'
import { preferencesCheck } from '../../utils/preferencesCheck'
import styles from './index.module.css'
import { setClearBusinessData } from '../../store/business-slice'
const BusinessPage = ({ loginData }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    // const [authState, setAuthState] = useState<any>({})
    const navigate = useNavigate()
    console.log(loginData)
    const { isPending, loading, businessData } = useSelector((state: RootState) => state.business)
    console.log(isPending)
    const { loginState } = useSelector((state: RootState) => state.auth)
    const { data, isError, isLoading, error } = useGetBusinessByNameQuery(loginData.publicUserId)
    useEffect(() => {
        if (loginData.businessName) {
            return navigate('/', { replace: true })
        } else if (error || isError) return navigate('/error', { replace: true })
    }, [loginData])
    return (
        <Box className={styles.container}>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Box className={styles.business__title}>
                        <Typography variant="h4"> Select your business</Typography>
                    </Box>
                    <Box className={styles.business__list}>
                        <BusinessList data={data} />
                    </Box>
                    {isPending ? <BusinessDialog loginState={loginData} /> : null}
                </>
            )}
            {loading ? (
                <Box>
                    <LoadingSpinner />
                </Box>
            ) : null}
            This is business page
        </Box>
    )
}

export default BusinessPage
