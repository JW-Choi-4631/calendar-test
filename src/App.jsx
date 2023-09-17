import { useState } from "react";
import "./App.css";

function App() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

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

  const startDate = new Date(year, month, 1);

  const startDay = startDate.getDay();

  // console.log(month, startDay, dayCount);

  const calendarArray = new Array(30).fill("");
  for (let i = 1, j = startDay; i <= dayCount; i++, j++) {
    calendarArray[j] = i;
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
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </ul>
          <div id="date-list">
            {calendarArray.map((item, index) => {
              if (item === "") return <div key={index} />;
              return <DayComp key={index} year={year} month={month} day={item} today={today} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

function DayComp({ year, month, day, today }) {
  const date = new Date(year, month, day);
  const check = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const onClick = () => {
    console.log(today, check);
    console.log(date.getTime());
    console.log(check.getTime());
    console.log(date);
  };

  if (date.getTime() === check.getTime()) {
    return (
      <div className="day" onClick={onClick}>
        <div style={{ width: "fit-content", borderRadius: "50%", backgroundColor: "black", color: "white" }}>{day}</div>
      </div>
    );
  }

  if (date < check) {
    return (
      <div className="day" onClick={onClick} style={{ color: "#DDDDDD" }}>
        {day}
      </div>
    );
  }

  return (
    <div className="day" onClick={onClick}>
      {day}
    </div>
  );
}
