import { useCountdown } from "../../hooks/useCountdown";


const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
    
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      
    </div>
  );
};
const CountdownTimer = ({ targetDate }:any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
const ClockComponent = () => {
   
     const THREE_DAYS_IN_MS = 1 * 60 * 1000;
     const NOW_IN_MS = new Date().getTime();

     const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

     return (
       <div>
         <h1>Countdown Timer</h1>
         <CountdownTimer targetDate={dateTimeAfterThreeDays} />
       </div>
     );
};

export default ClockComponent;
