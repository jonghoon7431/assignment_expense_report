import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MonthSpending = () => {
  const activeMonth = useSelector((state) => state.activeMonth);
  const data = useSelector((state) => state.data);

  //월 총액 계산
  const month = data.filter((data) => data.date.split("-")[1].includes(activeMonth));

  let totalAmount = 0;
  for (let i = 0; i < month.length; i++) {
    totalAmount += month[i].amount;
  }

  return (
    <MonthSpendingContainer>
      <SubTitle>
        {activeMonth}월 총 지출 : {totalAmount.toLocaleString()}원
      </SubTitle>
    </MonthSpendingContainer>
  );
};

const MonthSpendingContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 20px 0;
  padding: 1.5rem;
`;
const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
export default MonthSpending;
