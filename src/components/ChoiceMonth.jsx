import React from "react";
import styled from "styled-components";

//TODO : 조건부 스타일링(클릭된 버튼 활성화)
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
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
const ChoiceMonth = () => {
  //조건부 스타일링
  //클릭했을때 어디가 활성화되었는지 배경색으로 표현
  return (
    //TODO 버튼 map으로 리팩토링
    <ChoiceMonthButtonContainer>
      <MonthButton>1월</MonthButton>
      <MonthButton>2월</MonthButton>
      <MonthButton>3월</MonthButton>
      <MonthButton>4월</MonthButton>
      <MonthButton>5월</MonthButton>
      <MonthButton>6월</MonthButton>
      <MonthButton>7월</MonthButton>
      <MonthButton>8월</MonthButton>
      <MonthButton>9월</MonthButton>
      <MonthButton>10월</MonthButton>
      <MonthButton>11월</MonthButton>
      <MonthButton>12월</MonthButton>
    </ChoiceMonthButtonContainer>
  );
};

export default ChoiceMonth;
