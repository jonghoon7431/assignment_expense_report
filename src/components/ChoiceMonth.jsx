import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReportList from "./ReportList";

const ChoiceMonth = () => {
  //1~12 month array에 push
  let month = [];
  let i = 0;
  for (i = 0; i < 12; i++) {
    month.push(i + 1);
  }

  //클릭된 월 활성화(조건부 스타일링,local storage 저장)
  const [activeMonth, setActiveMonth] = useState(
    localStorage.getItem("month") ? Number(localStorage.getItem("month")) : 1
  );

  const handleClick = (month) => {
    setActiveMonth(month);
  };

  //activeMonth(클릭한 월 버튼)이 변경되면, local storage 값 변경
  useEffect(() => {
    localStorage.setItem("month", activeMonth);
  }, [activeMonth]);

  return (
    <div>
      <ChoiceMonthButtonContainer>
        {month.map((month) => (
          <MonthButton key={month} $active={activeMonth === month} onClick={() => handleClick(month)}>
            {month}월
          </MonthButton>
        ))}
      </ChoiceMonthButtonContainer>

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
