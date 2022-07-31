import { Container, Button, Card, IconButton, Typography } from "@mui/material";

import styles from "./accepteditem.module.css";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
export default function AcceptedItem(props: any) {
  const { id, user, items } = props.data;
  console.log(id, user, items);

  return (
    <Card sx={{ borderRadius: "15px", marginY: "20px" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box component={"div"} className={styles.column1}>
          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {id}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "18px" }}>
              {user}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "15px", marginBottom: 1 }}>
              You can adjust the prep time within the next
            </Typography>
            <Typography sx={{ fontWeight: 600 }} variant="body1">
              4:51
            </Typography>
          </Box>
        </Box>

        <Box component={"div"} className={styles.column2}>
          <Box
            component={"div"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Container
              sx={{
                display: "flex",
                marginTop: "25px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Container>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                      <DirectionsBikeIcon />
                    </Box>
                    <Box sx={{ marginX: 1, marginY: 1 }}>
                      <Typography sx={{ fontSize: "13px" }}>Antonio</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                      <LocationOnIcon />
                    </Box>
                    <Box sx={{ marginX: 1, marginY: 1 }}>
                      <Typography sx={{ fontSize: "13px" }}>
                        Deliver 3.4m
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.time__btn}>
                  <Box className={styles.time__box}>
                    <Typography
                      sx={{ color: "green", fontWeight: 600, fontSize: "22px" }}
                    >
                      15 <br /> min
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        width: "140px",
                        padding: 2,
                        borderRadius: "15px",
                        height: "80px",
                      }}
                      color="success"
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "15px",
                        }}
                      >
                        Ready to pick up
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Container>
          </Box>
        </Box>
      </Container>
    </Card>
  );
}
