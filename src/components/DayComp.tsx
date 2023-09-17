import React from "react";

function DayComp({ year, month, date, day, today }) {
  const newDate = new Date(year, month, date);
  const check = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const onClick = () => {
    console.log(today, check);
    console.log(newDate.getTime());
    console.log(check.getTime());
    console.log(newDate);
    console.log(day);
  };

  if (newDate.getTime() === check.getTime()) {
    return (
      <div className="day" onClick={onClick} style={{ backgroundColor: "black", color: "white" }}>
        {date}
      </div>
    );
  }

  if (newDate < check) {
    return (
      <div className="day" onClick={onClick} style={{ color: "#DDDDDD" }}>
        {date}
      </div>
    );
  }

  if (day === 0) {
    return (
      <div className="day" onClick={onClick} style={{ color: "red" }}>
        {date}
      </div>
    );
  }

  if (day === 6) {
    return (
      <div className="day" onClick={onClick} style={{ color: "blue" }}>
        {date}
      </div>
    );
  }

  return (
    <div className="day" onClick={onClick}>
      {date}
    </div>
  );
}

export default DayComp;
