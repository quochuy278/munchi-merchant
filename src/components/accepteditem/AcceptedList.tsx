import React, { Fragment } from 'react'
import AcceptedItem from './AcceptedItem';

const DUMMY_DATA = [
  {
    id: "#423424",
    user: "Alexander",
    address: "Uusikatu",
    time: "12 mins",
  },
  {
    id: "#123424",
    user: "Kristen",
    address: "Paasikatu",
    time: "24 mins",
  },
  {
    id: "#123424",
    user: "Max",
    address: "Paasikatu",
    time: "24 mins",
  },
  {
    id: "#123424",
    user: "Sida",
    address: "Paasikatu",
    time: "24 mins",
  },
];

export default function AcceptedList() {
  return (
    <Fragment>
      {DUMMY_DATA.map((data) => {
        return <AcceptedItem data={data} id={data.id} />;
      })}
    </Fragment>
  );
}
