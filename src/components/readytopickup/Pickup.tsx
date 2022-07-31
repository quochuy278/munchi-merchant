import { Box } from "@mui/system";
import React, { Fragment } from "react";
import PickupItem from "./PickupItem";
import Pendingitem from "./PickupItem";

const DUMMY_DATA = [
  {
    id: "#423424",
    user: "Alexander",
    items: [
      {
        id: 1,
        quantity: 1,
        name: "Veggie taco",
      },
      {
        id: 2,
        quantity: 1,
        name: "Sweet potato fries(modified)",
      },
      {
        id: 3,
        quantity: 1,
        name: "Chicken Taco",
      },
    ],
    note: "No cultery please",
  },
  {
    id: "#427424",
    user: "Alexander",
    items: [
      {
        id: 1,
        quantity: 1,
        name: "Veggie taco",
      },
      {
        id: 2,
        quantity: 1,
        name: "Sweet potato fries(modified)",
      },
      {
        id: 3,
        quantity: 1,
        name: "Chicken Taco",
      },
    ],
    note: "No cultery please",
  },
  
];

export default function Pickup() {
  return (
    <Fragment>
      <Box sx={{display: "flex"}}> 
        {DUMMY_DATA.map((data) => {
          return <PickupItem data={data} id={data.id} />;
        })}
      </Box>
    </Fragment>
  );
}
