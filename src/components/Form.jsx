import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addFormData } from "../redux/slices/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    //빈칸 입력시
    if (!date || !item.trim() || !amount.trim() || !date.trim()) return alert("정보를 모두 기입해주세요");
    //올해가 아닌 년도 입력시
    if (new Date().getFullYear() !== +date.slice(0, 4)) return alert("올해의 지출 정보만 담을 수 있습니다");
    //금액이 음수나 0일 경우
    if (amount <= 0) return alert("입력 금액이 올바른지 확인해주세요");

    dispatch(addFormData({ id: uuidv4(), date, item, amount, description }));
    e.target.reset();
  };
  return (
    <WrapContainer onSubmit={onSubmit}>
      <FormContainer>
        <input type="date" name="date" />
        <input type="text" name="item" placeholder="항목" />
        <input type="number" name="amount" placeholder="금액" autoComplete="off" />
        <input type="text" name="description" placeholder="지출 내용" autoComplete="off" />
      </FormContainer>

      <StFormButton>저장</StFormButton>
    </WrapContainer>
  );
};

const WrapContainer = styled.form`
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 10px;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 2fr);
  }
  & input {
    width: 90%;
    box-sizing: border-box;
  }
`;

const StFormButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: var(--blue);
  color: white;
  font-size: 1rem;
  padding: 14px;
  margin: auto;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-blue);
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 40px;
  }
  @media all and (max-width: 479px) {
    width: 50px;
    font-size: 0.9rem;
  }
`;
export default Form;
