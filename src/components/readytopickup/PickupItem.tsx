import {
  Button,
  Card,
  CardContent,
  IconButton,
  styled,
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

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: "15px",
  marginY: "20px",
  "@media only screen and (min-width: 768px) and (max-width: 1224px)": {
    maxWidth: "300px",
    width: "300px",
    height: "200px",
    marginLeft: "10px",
    marignRight: "10px",
  },
}));
export default function PickupItem(props: any) {
  const { id, user, items, note } = props.data;
  console.log(id, user, items);
  return (
    <CustomCard
      sx={{ borderRadius: "15px", marginY: "20px" }}
      className={styles.card__container}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {id}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "red", fontSize: "12px" }}>
            Auto reject in 4:69
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box component={"div"} className={styles.column1}>
          <Typography variant="body2" sx={{ fontSize: "18px" }}>
            {user}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></Box>
          <Box justifyContent="center" sx={{ width: "100%" }}>
            <Button
              variant="contained"
              sx={{ width: "100%", padding: 2, borderRadius: "15px" }}
              color="success"
            >
            Mark as done
            </Button>
          </Box>
        </Box>
      </Box>
    </CustomCard>
  );
}
