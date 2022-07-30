import React, { Fragment } from "react";
import Pendingitem from "./Pendingitem";

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

export default function PendingList() {
  return (
    <Fragment>
      {DUMMY_DATA.map((data) => {
        return <Pendingitem data={data} id={data.id} />;
      })}
    </Fragment>
  );
}
