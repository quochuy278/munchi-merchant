import React from "react";
import { Props } from "../../shared/types/props.type";
import styles from './maincontent.module.css';

export default function MainContent({children}: Props) {
  return <div className={styles.container}>{children}</div>;
}
