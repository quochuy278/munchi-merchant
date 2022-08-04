import styles from './detailcontent.module.css'

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function DetailContent({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
