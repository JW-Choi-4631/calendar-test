import React from "react";

function DayComp({ year, month, date, day, today, eventDate }) {
  const newDate = new Date(year, month, date);
  const check = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const hasEvent = () => {
    let result = false;
    eventDate.map((event) => {
      if (event.getTime() === newDate.getTime()) {
        result = true;
      }
    });
    return result;
  };

  const onClick = () => {
    console.log(eventDate);
    console.log(hasEvent());
  };

  // 오늘 이전 날짜
  if (newDate < check) {
    if (hasEvent()) {
      return (
        <div className="day" onClick={onClick}>
          <span style={{ color: "#DDDDDD", border: "1px solid #DDDDDD" }}>{date}</span>
        </div>
      );
    }
    return (
      <div className="day" onClick={onClick}>
        <span style={{ color: "#DDDDDD" }}>{date}</span>
      </div>
    );
  }

  if (hasEvent()) {
    return (
      <div className="day" onClick={onClick}>
        <span style={{ color: "#0A84FF", border: "2px solid #0A84FF" }}>{date}</span>
      </div>
    );
  }

  // 오늘
  if (newDate.getTime() === check.getTime()) {
    return (
      <div className="day" onClick={onClick}>
        <span style={{ backgroundColor: "black", color: "white" }}>{date}</span>
      </div>
    );
  }

  // 일요일
  if (day === 0) {
    return (
      <div className="day" onClick={onClick}>
        <span style={{ color: "red" }}>{date}</span>
      </div>
    );
  }

  //토요일
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
