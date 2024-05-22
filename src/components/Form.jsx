import React from "react";
import styled from "styled-components";

const FormWrapContainer = styled.form`
  border-radius: 10px;
  background-color: white;
  margin: 20px auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
`;
const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;
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
console.log(new Date().getFullYear());
const Form = ({ setData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    const nextData = {
      id: crypto.randomUUID(),
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
        <input type="text" name="item" />
      </StInputDiv>
      <StInputDiv>
        <label>금액</label>
        <input type="number" name="amount" />
      </StInputDiv>
      <StInputDiv>
        <label>내용</label>
        <input type="text" name="description" />
      </StInputDiv>
      <StFormButton>저장</StFormButton>
    </FormWrapContainer>
  );
};

export default Form;
