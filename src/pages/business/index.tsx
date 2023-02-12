import { GetResult, Preferences } from '@capacitor/preferences'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BusinessList from '../../components/business/list'
import MainContent from '../../components/container/MainContent'
import { LoadingSpinner } from '../../components/customcomponents'
import { BusinessData } from '../../shared/interfaces/business.interface'
import { PreferencesAuthenticateData, PreferencesData } from '../../shared/interfaces/services.interface'
import { AppDispatch, RootState } from '../../store'
import { setAuthenticated } from '../../store/auth-slice'
import { useGetBusinessByNameQuery } from '../../store/services-slice'
import styles from './index.module.css'

const BusinessPage = () => {
    const [publicUserId, setPublicUserId] = useState('')
    const { businessData } = useSelector((state: RootState) => state.business)
    const { data, isError, isLoading, error } = useGetBusinessByNameQuery(publicUserId)
    const { isValid } = useSelector((state: RootState) => state.business)
    const navigate = useNavigate()
    useEffect(() => {
        const getPublibUserId = async () => {
            const authenticateData: GetResult = await Preferences.get({ key: 'authenticateData' })
            const data: PreferencesAuthenticateData = JSON.parse(authenticateData.value!)
            setPublicUserId(data.publicUserId as string)
        }
        getPublibUserId()
        if (isValid) navigate('/')
    }, [isValid])
    if (!publicUserId) {
        return <LoadingSpinner />
    }
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
                </>
            )}
        </Box>
    )
}

export default BusinessPage
