import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BusinessDialog from '../../components/business/dialog/BusinessDialog'
import BusinessList from '../../components/business/list'
import { LoadingSpinner } from '../../components/customcomponents'
import { AppDispatch, RootState } from '../../store'
import { logOut, useGetBusinessByNameQuery } from '../../store/services-slice'
import styles from './index.module.css'
const BusinessPage = ({ loginData }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    // const [authState, setAuthState] = useState<any>({})
    const navigate = useNavigate()
    const { isPending, loading } = useSelector((state: RootState) => state.business)
    console.log(isPending)
    const { data, isError, isLoading, error } = useGetBusinessByNameQuery(loginData.publicUserId)
    useEffect(() => {
        if (loginData.businessName) {
            return navigate('/', { replace: true })
        }
    }, [loginData])
    // if (error || isError) {
    //     setTimeout(() => {
    //         dispatch(logOut())
    //     }, 1000)
    // }
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
        </Box>
    )
}

export default BusinessPage
