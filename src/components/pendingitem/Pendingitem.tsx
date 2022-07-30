import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./pendingitem.module.css";

import BentoIcon from "@mui/icons-material/Bento";

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
  },
];

export default function Pendingitem(props: any) {
  const { id, user, items, note} = props.data;
  console.log(id, user, items);
  return (
    <Card sx={{ borderRadius: "15px", marginY: "20px" }}>
      <Box sx={{ display: "flex" }}>
        <Box component={"div"} className={styles.column1}>
          <Typography variant="h6">{id}</Typography>
          <Typography variant="body2">{user}</Typography>
          <Box component={"div"} className={styles.note}>
            {note}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton>
                <BentoIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                Auto reject in 4:69
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box component={"div"} className={styles.column2}>
          <Box
            component={"div"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box>
              {items.map((item: any) => {
                return (
                  <Box>
                    <Typography sx={{ fontSize: "14px" }}>
                      {item.quantity} x {item.name}
                    </Typography>
                  </Box>
                );
              })}
              <Box>
                <Typography sx={{ fontSize: "10px" }}>+ 2 more </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "25px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box className={styles.time}>
                <Typography sx={{ color: "green", fontWeight: 600 }}>
                  15 min
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ width: "120px", padding: 2, borderRadius: "15px" }}
                >
                  Accept
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
