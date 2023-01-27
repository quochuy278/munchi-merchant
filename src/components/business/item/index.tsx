import {
  Avatar, Card,
  CardActionArea, CardHeader
} from "@mui/material";

const BusinessItem = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#ebe1e1c9",
        boxShadow: "10px 5px 5px #F8F8F8",
        ":active": {
          backgroundColor: "#888888",
        },
      }}
    >
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar src="https://res.cloudinary.com/ordering/image/upload/v1534196961/ak4o8bfgxcpoue0fx1xa.jpg"></Avatar>
          }
          title="Twirly Laundry"
        />
      </CardActionArea>
    </Card>
  );
};

export default BusinessItem;
