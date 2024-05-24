import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReportList from "./ReportList";

const ChoiceMonth = () => {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [activeMonth, setActiveMonth] = useState(
    localStorage.getItem("month") ? Number(localStorage.getItem("month")) : 1
  );
  const handleClick = (month) => {
    setActiveMonth(month);
  };

  useEffect(() => {
    localStorage.setItem("month", activeMonth);
  }, [activeMonth]);
  console.log(activeMonth);
  return (
    <div>
      <ChoiceMonthButtonContainer>
        {month.map((month) => (
          <MonthButton key={month} $active={activeMonth === month} onClick={() => handleClick(month)}>
            {month}월
          </MonthButton>
        ))}
      </ChoiceMonthButtonContainer>
      {/* 내역 컴포넌트 */}
      <ReportList activeMonth={activeMonth} />
    </div>
  );
};

const ChoiceMonthButtonContainer = styled.div`
  background-color: white;
  border: none;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.2rem;
  padding: 1.2rem 2rem;
  margin: 20px 0;
`;
const MonthButton = styled.button`
  border: none;
  background-color: ${(props) => (props.$active ? "#0E487D" : "lightgray")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$active ? "#0E487D" : "grey")};
  }
`;

export default ChoiceMonth;
