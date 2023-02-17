import { GetResult, Preferences } from '@capacitor/preferences'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
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
import { setAuthenticated } from '../../store/auth-slice'
import { useGetBusinessByNameQuery } from '../../store/services-slice'
import { displayError } from '../../utils/displayError'
import { preferencesCheck } from '../../utils/preferencesCheck'
import styles from './index.module.css'

const BusinessPage = () => {
    const [authState, setAuthState] = useState<any>({})
    const { businessData } = useSelector((state: RootState) => state.business)
    const navigate = useNavigate()
    //
    const { isPending, loading } = useSelector((state: RootState) => state.business)
    const { loginState } = useSelector((state: RootState) => state.auth)
    console.log('🚀 ~ file: index.tsx:32 ~ BusinessPage ~ loginState', loginState)
    let publicIdParam: string
    if (JSON.stringify(authState) === '{}') {
        publicIdParam = loginState.publicUserId as string
    } else {
        publicIdParam = authState.publicUserId as string
    }
    console.log(authState)
    const { data, isError, isLoading, error } = useGetBusinessByNameQuery(publicIdParam)
    const getAuthenticateState = async () => {
        const loginStateObject: any = await Preferences.get({ key: 'loginState' })
        const preferenceLoginState = JSON.parse(loginStateObject.value)
        setAuthState(preferenceLoginState)
    }
    const isValid = !!authState || JSON.stringify(loginState) !== '{}'
    console.log(isValid)
    useEffect(() => {
        try {
            getAuthenticateState()
        } catch (error) {
            displayError(error)
        }
    }, [])

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
                    {isPending ? <BusinessDialog loginState={authState || loginState} /> : null}
                </>
            )}
            {loading ? (
                <Box>
                    <LoadingSpinner />
                </Box>
            ) : null}
        </Box>
    )
}

export default BusinessPage
