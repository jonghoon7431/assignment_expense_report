import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReportList from "./ReportList";

const ChoiceMonth = ({ data }) => {
  const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const [activeIndex, setActiveIndex] = useState(
    localStorage.getItem("month") ? JSON.parse(localStorage.getItem("month")) : []
  );
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  // useEffect(() => {
  //   const getMonth = localStorage.getItem("month");
  //   if (getMonth) {
  //     setActiveIndex(JSON.parse(getMonth));
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem("month", JSON.parse(activeIndex));
  }, [activeIndex]);

  return (
    <div>
      <ChoiceMonthButtonContainer>
        {month.map((month, index) => (
          <MonthButton key={index} $active={activeIndex === index} onClick={() => handleClick(index)}>
            {month}월
          </MonthButton>
        ))}
      </ChoiceMonthButtonContainer>
      <ReportList data={data} activeIndex={activeIndex} />
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
  margin: 10px 0;
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
