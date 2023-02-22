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

export default function Layout({ children, isAuthenticated,loginData }: any) {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    console.log(loginData, 'layout level')
    return (
        <div className={styles.app__container}>
            {isAuthenticated ? <Header loginData={loginData} /> : null}
            <main>{children}</main>
            <Footer />
        </div>
    )
}
