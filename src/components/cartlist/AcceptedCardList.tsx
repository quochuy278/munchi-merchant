import { Box } from "@mui/material";
import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
export default function AcceptedCardList({ children }: Props) {
  return (
    <Box
      display="grid"
      className="card__container"
      gridTemplateColumns="repeat(1, 1fr)"
      gap={2}
      paddingX={2}
    >
      {children}
    </Box>
  );
}
