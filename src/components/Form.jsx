import React, { useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../context/DataContext";

const Form = () => {
  const { setData } = useContext(DataContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    const nextData = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };
    //빈칸 입력시 alert
    if (!date || !item.trim() || !amount.trim() || !date.trim()) return alert("정보를 모두 기입해주세요");
    //날짜가 올해 년도가 아닐시 alert
    if (new Date().getFullYear() !== +date.slice(0, 4)) return alert("올해의 지출 정보만 담을 수 있습니다");

    setData((prev) => [nextData, ...prev]);
    e.target.reset();
  };
  return (
    <FormWrapContainer onSubmit={onSubmit}>
      <StInputDiv>
        <label>날짜</label>
        <input type="date" name="date" />
      </StInputDiv>
      <StInputDiv>
        <label>항목</label>
        <input type="text" name="item" autoComplete="off" />
      </StInputDiv>
      <StInputDiv>
        <label>금액</label>
        <input type="number" name="amount" autoComplete="off" />
      </StInputDiv>
      <StInputDiv>
        <label>내용</label>
        <input type="text" name="description" autoComplete="off" />
      </StInputDiv>
      <StFormButton>저장</StFormButton>
    </FormWrapContainer>
  );
};

const FormWrapContainer = styled.form`
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;
const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  & input {
  }
`;
const StFormButton = styled.button`
  width: 60px;
  border: none;
  border-radius: 10px;
  background-color: var(--blue);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-blue);
  }
`;
export default Form;
