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
      <div className="day" onClick={onClick}>
        <span style={{ backgroundColor: "black", color: "white" }}>{date}</span>
      </div>
    );
  }

  if (newDate < check) {
    return (
      <div className="day" onClick={onClick}>
        <span style={{ color: "#DDDDDD" }}>{date}</span>
      </div>
    );
  }

  if (day === 0) {
    return (
      <div className="day" onClick={onClick}>
        <span style={{ color: "red" }}>{date}</span>
      </div>
    );
  }

  if (day === 6) {
    return (
      <div className="day" onClick={onClick}>
        <span style={{ color: "blue" }}>{date}</span>
      </div>
    );
  }

  return (
    <div className="day" onClick={onClick}>
      <span>{date}</span>
    </div>
  );
}

export default DayComp;
