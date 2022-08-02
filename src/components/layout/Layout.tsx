import React, { Fragment } from 'react'
import Footer from './Footer';
import Header from './Header'
import styles from './layout.module.css'
type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({children} : Props) {
  return (
    <div className={styles.app__container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
