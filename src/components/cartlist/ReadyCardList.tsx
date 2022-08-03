import { Box } from "@mui/material";
import styles from "./cardlist.module.css";
type Props = {
  children?: JSX.Element | JSX.Element[];
};
export default function ReadyCardList({ children }: Props) {
  return (
    <Box
      display="grid"
      className={styles.card__container}
      gridTemplateColumns="repeat(1, 1fr)"
      gap={2}
      paddingX={2}
    >
      {children}
    </Box>
  );
}
