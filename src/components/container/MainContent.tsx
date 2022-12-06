import { Props } from '../../shared/interfaces/props.interface';
import styles from './maincontent.module.css';

export default function MainContent({children}: Props) {
  return <div className={styles.container}>{children}</div>;
}
