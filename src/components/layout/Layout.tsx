import { useSelector } from 'react-redux'
import { Props } from '../../shared/interfaces/props.interface'
import { AppDispatch, RootState } from '../../store'
import Footer from './Footer'
import Header from './Header'
import styles from './layout.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Preferences } from '@capacitor/preferences'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../../store/auth-slice'
import { preferencesCheck } from '../../utils/preferencesCheck'

export default function Layout({ children }: Props) {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  
    useEffect(() => {
        // const getToken = async () => {
        //   const { value } = await Preferences.get({ key: "authenticateData" });
        //   const isAuthenticatedCheck = !!value;
        //   console.log(value , isAuthenticatedCheck)
        //   if (value !== null) dispatch(setAuthenticated(isAuthenticatedCheck));
        //   else dispatch(setAuthenticated(false))
        // };

        try {
            preferencesCheck('authenticateData')
        } catch (error) {
            console.log(error)
        }
    }, [])
    //   if (isAuthenticated) {
    //     console.log(isAuthenticated)
    //     console.log('Authenticated')
    //   } else {
    //     console.log(isAuthenticated)
    //     console.log('Not Authenticated yet')
    //   }

    return (
        <div className={styles.app__container}>
            {isAuthenticated ? <Header /> : null}
            <main>{children}</main>
            <Footer />
        </div>
    )
}
