import { Props } from '../../shared/types/props.type';
import styles from './detailcontent.module.css'

export default function DetailContent({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
