import React, { useState, useMemo } from "react";
import Widget from "./widget";

const CalendarWidget = () => {
  const [days, setDays] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  const weekDates = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDay();
    const sundayOffset = -currentDay;

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + sundayOffset + i);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${month}/${day}`;
    });
  }, []);

  const handleFix = () => {
    setDays(days.filter((day) => day !== "Monday"));
  };

  return (
    <Widget title="fix the week">
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1rem",
          transition: "all 0.5s ease-in-out",
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "thin",
          paddingBottom: "0.5rem",
        }}
      >
        {days.map((day) => (
          <div
            key={day}
            style={{
              padding: "1rem",
              border: "2px solid #333",
              borderRadius: "8px",
              minWidth: "80px",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              transition: "all 0.5s ease-in-out",
              flexShrink: 0,
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{day.slice(0, 3)}</div>
            <div style={{ fontSize: "1.5rem" }}>
              {
                weekDates[
                  [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].indexOf(day)
                ]
              }
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleFix}
          disabled={!days.includes("Monday")}
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#2f4f4f",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: days.includes("Monday") ? "pointer" : "not-allowed",
            opacity: days.includes("Monday") ? 1 : 0.5,
            transition: "all 0.3s ease",
          }}
        >
          Fix
        </button>
      </div>
    </Widget>
  );
};

export default CalendarWidget;
