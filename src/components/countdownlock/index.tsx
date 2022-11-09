import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import {
  ClockProps,
  CoundownProps,
} from "../../shared/interfaces/props.interface";
import { FactoryTimeFormat } from "../factory";

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
  } else {
    return <FactoryTimeFormat minutes={minutes} seconds={seconds} isDanger={minutes < 3}/>;
  }
};
const ClockComponent = ({ targetDate }: ClockProps) => {
  return (
      <CountdownTimer targetDate={targetDate} />
  );
};

export default ClockComponent;
