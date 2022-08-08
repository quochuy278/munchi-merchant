import React, { Fragment } from 'react'
import { Props } from '../../shared/types/props.type';
import Footer from './Footer';
import Header from './Header'
import styles from './layout.module.css'


export default function Layout({children} : Props) {
  return (
    <div className={styles.app__container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
