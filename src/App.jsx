import { useState } from "react";
import "./App.css";

function App() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  // 달 이동 시 리랜더링 되도록 설정
  const nextMonth = () => {
    setMonth((prev) => {
      if (prev === 11) {
        setYear((prev) => prev + 1);
        return 0;
      }
      return prev + 1;
    });
  };
  const prevMonth = () => {
    setMonth((prev) => {
      if (prev === 0) {
        setYear((prev) => prev - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  // 달 설정 및 달별 총 날짜 결정
  let dayCount = 31;
  let currentMonth;
  switch (month + 1) {
    default:
      currentMonth = "Jan";
      break;
    case 2:
      currentMonth = "Feb";
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            dayCount = 29;
            break;
          }
          dayCount = 28;
          break;
        }
        dayCount = 29;
        break;
      }
      dayCount = 28;
      break;
    case 3:
      currentMonth = "Mar";
      break;
    case 4:
      currentMonth = "Apr";
      dayCount = 30;
      break;
    case 5:
      currentMonth = "May";
      break;
    case 6:
      currentMonth = "Jun";
      dayCount = 30;
      break;
    case 7:
      currentMonth = "Jul";
      break;
    case 8:
      currentMonth = "Aug";
      break;
    case 9:
      currentMonth = "Sep";
      dayCount = 30;
      break;
    case 10:
      currentMonth = "Oct";
      break;
    case 11:
      currentMonth = "Nov";
      dayCount = 30;
      break;
    case 12:
      currentMonth = "Dec";
      break;
  }

  // 달력에 날짜 찍기
  const startDate = new Date(year, month, 1);
  const startDay = startDate.getDay();
  const calendarArray = new Array(30).fill("");
  for (let i = 1, j = startDay; i <= dayCount; i++, j++) {
    const day = new Date(year, month, i).getDay();
    calendarArray[j] = { date: i, day };
  }

  return (
    <>
      <main>
        <section id="calendar">
          <div id="year">
            <div onClick={prevMonth}>{"<"}</div>
            <span>
              {currentMonth} {year}
            </span>
            <div onClick={nextMonth}>{">"}</div>
          </div>
          <ul id="day-list">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <div id="date-list">
            {calendarArray.map((item, index) => {
              if (item === "") return <div key={index} />;
              return <DayComp key={index} year={year} month={month} date={item.date} day={item.day} today={today} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

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
