import { useSelector } from 'react-redux'
import { Props } from '../../shared/interfaces/props.interface'
import { AppDispatch, RootState } from '../../store'
import Footer from './Footer'
import Header from './Header'
import styles from './layout.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Preferences } from '@capacitor/preferences'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../../store/auth-slice'
import { preferencesCheck } from '../../utils/preferencesCheck'
import { displayError } from '../../utils/displayError'
import { LoginState } from '../../shared/interfaces/user.interface'

export default function Layout({ children }: Props) {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [authState, setAuthState] = useState(false)
    const { loginState, isAuthenticated } = useSelector((state: RootState) => state.auth)

    const getAuthenticateState = async () => {
        const loginStateObject: any = await Preferences.get({ key: 'loginState' })
        const loginState: LoginState = JSON.parse(loginStateObject.value)
        if (!loginState) {
            setAuthState(false)
        } else {
            setAuthState(loginState.isAuthenticated as boolean)
        }
    }
    useEffect(() => {
        try {
            getAuthenticateState()
        } catch (error) {
            displayError(error)
        }
    }, [getAuthenticateState])
    let isAuthenticatedVar: boolean
    if (JSON.stringify(loginState) !== '{}') {
        isAuthenticatedVar = isAuthenticated
    } else {
        isAuthenticatedVar = authState
    }

    return (
        <div className={styles.app__container}>
            {isAuthenticatedVar ? <Header loginState={loginState}/> : null}
            <main>{children}</main>
            <Footer />
        </div>
    )
}
