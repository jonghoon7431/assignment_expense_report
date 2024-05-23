import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const location = useLocation();
  console.log(location);
  const data = location.state.data;
  //TODO 데이터 수정 삭제 : localstorage or 쿼리스트링으로
  //수정 - 디테일 페이지에서 상태 하나 새로 선언해서,
  //input값 받은 뒤 데이터를home으로 보내서 일치하는 data 값 수정?
  //삭제- url 뒤 id값 제대로 들어오나 확인, id 값 가져와서 일치하는 애 제거?
  //근데 그게 디테일 페이지에서 되나?
  const navigate = useNavigate();

  const deleteList = location.state.deleteList;

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
          {/* TODO 수정, 삭제 구현  */}
          <button>수정</button>
          <button onClick={deleteList}>삭제</button>
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
