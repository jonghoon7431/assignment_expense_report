import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMonth } from "../redux/slices/MonthSlice";

const ChoiceMonth = () => {
  const dispatch = useDispatch();
  const activeMonth = useSelector((state) => state.activeMonth);

  //month 1-12
  let month = [];
  let i = 0;
  for (i = 0; i < 12; i++) {
    month.push(i + 1);
  }

  const handleClick = (month) => {
    dispatch(getMonth(month));
  };

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
    </div>
  );
};

const ChoiceMonthButtonContainer = styled.div`
  background-color: white;
  border: none;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  text-align: center;
  justify-items: center;
  gap: 0.8rem;
  padding: 1rem;
  margin: 20px auto;
  white-space: nowrap;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    /* gap: 1rem; */
    grid-template-columns: repeat(4, 1fr);
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (max-width: 479px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const MonthButton = styled.button`
  width: 90%;
  display: flex;
  justify-content: center;
  border: none;
  background-color: ${(props) => (props.$active ? "#0E487D" : "lightgray")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border-radius: 10px;
  font-size: 1.8vw;
  padding: 0.5rem 1rem;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$active ? "#0E487D" : "grey")};
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media all and (max-width: 479px) {
    font-size: 16px;
  }
`;

export default ChoiceMonth;
