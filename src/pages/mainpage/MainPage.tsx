import { Box } from '@mui/system';
import { AcceptedButton, PendingButton, ReadyButton } from '../../components/actioncard/ActionButton';
import MainContent from '../../container/MainContent';
import styles from './mainpage.module.css'
import BaseActionCard from '../../components/actioncard/BaseActionCard';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const CustomeTypography = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "16px",
  fontWeight: 600,
}));

const CustomeBox = styled(Box)(({ theme }) => ({
  height: "26px",
  width: "26px",
  backgroundColor: "white",
  textAlign: "center",
  marginLeft: "10px",
}));

const MainPage = () => {
   const orders = useSelector((state: RootState) => state.order.orders);
    return (
      <MainContent>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          sx={{ width: "100%", padding: "10px" }}
        >
          <Box gridColumn="span 4" className="section__container">
            <Box gridColumn="span 2" className="section__header" display="flex">
              <CustomeTypography variant="h5">Pending</CustomeTypography>
              <CustomeBox>2</CustomeBox>
            </Box>
            <Box
              display="grid"
              className="card__container"
              gridTemplateColumns="repeat(1, 1fr)"
              gap={2}
              paddingX={2}
            >
              <BaseActionCard footer={() => <PendingButton />}></BaseActionCard>
            </Box>
          </Box>
          <Box gridColumn="span 4" className="section__container">
            <Box gridColumn="span 2" className="section__header" display="flex">
              <CustomeTypography variant="h5">Accepted</CustomeTypography>
              <CustomeBox>2</CustomeBox>
            </Box>
            <Box
              display="grid"
              className="card__container"
              gridTemplateColumns="repeat(1, 1fr)"
              gap={2}
              paddingX={2}
            >
              <BaseActionCard footer={() => <AcceptedButton />} />
            </Box>
          </Box>

          <Box gridColumn="span 4" className="section__container">
            <Box gridColumn="span 2" className="section__header" display="flex">
              <CustomeTypography variant="h5">Ready</CustomeTypography>
              <CustomeBox>2</CustomeBox>
            </Box>
            <Box
              display="grid"
              className="card__container"
              gridTemplateColumns="repeat(1, 1fr)"
              gap={2}
              paddingX={2}
            >
              <BaseActionCard footer={() => <ReadyButton />}></BaseActionCard>
            </Box>
          </Box>
        </Box>
      </MainContent>
    );
}

export default MainPage;