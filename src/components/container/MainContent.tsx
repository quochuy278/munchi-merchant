import React from "react";
import styles from './maincontent.module.css';


type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function MainContent({children}: Props) {
  return <div className={styles.container}>{children}</div>;
}
