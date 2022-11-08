import { Typography } from "@mui/material";
import { useCountdown } from "../../hooks/useCountdown";
import { ClockProps, CoundownProps } from "../../shared/interfaces/props.interface";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: CoundownProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } 
   else if (seconds < 10) {
     return (
       <Typography
         sx={{ color: "#FF5F5F" }}
         fontSize="20px"
         lineHeight="26px"
         component={"div"}
       >
         {minutes}: 0:{seconds}
       </Typography>
     );
   } else {
     return (
       <Typography
         sx={{ color: "#FF5F5F" }}
         fontSize="20px"
         lineHeight="26px"
         component={"div"}
       >
         {minutes}:{seconds}
       </Typography>
     );
   }
};
const ClockComponent = ({ targetDate }: ClockProps) => {
  return <CountdownTimer targetDate={targetDate} />;
};

export default ClockComponent;
