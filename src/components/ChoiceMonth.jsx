import React, { useState } from "react";
import styled from "styled-components";

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
  background-color: ${(props) => (props.$active ? "#4a88c2" : "lightgray")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$active ? "#0E487D" : "grey")};
  }
`;
const ChoiceMonth = () => {
  const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ChoiceMonthButtonContainer>
      {month.map((month, index) => (
        <MonthButton key={index} $active={activeIndex === index} onClick={() => handleClick(index)}>
          {month}월
        </MonthButton>
      ))}
    </ChoiceMonthButtonContainer>
  );
};

export default ChoiceMonth;
