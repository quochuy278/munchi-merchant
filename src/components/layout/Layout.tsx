import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Props } from '../../shared/types/props.type';
import { RootState } from '../../store';
import Footer from './Footer';
import Header from './Header'
import styles from './layout.module.css'


export default function Layout({children} : Props) {
  const isAuthenticated = useSelector(( state: RootState) => state.auth.isAuthenticated)
  return (
    <div className={styles.app__container}>
      {isAuthenticated ? <Header /> : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
