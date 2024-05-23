import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const location = useLocation();
  console.log(location);
  const data = location.state.data;
  // const setData = location.state.setData;
  const navigate = useNavigate();

  return (
    <DetailDiv>
      <WrapContainer>
        <InputDiv>
          <label>날짜: </label>
          <input type="text" value={data.date} />
        </InputDiv>
        <InputDiv>
          <label>항목: </label>
          <input type="text" value={data.item} />
        </InputDiv>
        <InputDiv>
          <label>금액: </label>
          <input type="number" value={data.amount} />
        </InputDiv>
        <InputDiv>
          <label>내용: </label>
          <input type="text" value={data.description} />
        </InputDiv>
        <ButtonDiv>
          <button>수정</button>
          <button>삭제</button>
          <button onClick={() => navigate("/")}>뒤로가기</button>
        </ButtonDiv>
      </WrapContainer>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  width: 100%;
  background-color: white;
  margin: 4rem auto;
`;
const WrapContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 0.5;

  & input {
    margin: 1rem 0;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & label {
    margin-right: 1rem;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default Details;
