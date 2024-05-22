import React from "react";
import styled from "styled-components";

const FormWrapContainer = styled.form`
  border-radius: 10px;
  background-color: white;
  margin: 10px auto;
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
  background-color: #4a88c2;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const Form = ({ setData }) => {
  return (
    <FormWrapContainer>
      <StInputDiv>
        <label>날짜</label>
        <input type="date" />
      </StInputDiv>
      <StInputDiv>
        <label>항목</label>
        <input type="text" />
      </StInputDiv>
      <StInputDiv>
        <label>금액</label>
        <input type="number" />
      </StInputDiv>
      <StInputDiv>
        <label>내용</label>
        <input type="text" />
      </StInputDiv>
      <StFormButton>저장</StFormButton>
    </FormWrapContainer>
  );
};

export default Form;
