import React, { useContext, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, setData } = useContext(DataContext);
  const detailData = data.find((detailData) => detailData.id === params.id);

  //삭제
  const deleteList = () => {
    if (!confirm("정말 이 항목을 삭제하시겠습니까?")) return;
    setData((prev) => prev.filter((data) => data.id !== detailData.id));
    navigate("/");
  };

  //수정- 유효성 검사 추가해야함
  const inputRef = useRef([]);

  const [edit, setEdit] = useState({
    id: detailData.id,
    date: detailData.date,
    item: detailData.item,
    amount: detailData.amount,
    description: detailData.description,
  });
  const { date, item, amount, description } = edit;

  const onChangeHandler = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const editDetailItem = () => {
    setData(data.map((data) => (data.id === params.id ? edit : data)));
    navigate("/");
  };
  return (
    <DetailDiv>
      <WrapContainer>
        <InputDiv>
          <label>날짜: </label>
          <input type="text" value={date} name="date" onChange={onChangeHandler} />
        </InputDiv>
        <InputDiv>
          <label>항목: </label>
          <input type="text" value={item} name="item" onChange={onChangeHandler} />
        </InputDiv>
        <InputDiv>
          <label>금액: </label>
          <input type="number" value={amount} name="amount" onChange={onChangeHandler} />
        </InputDiv>
        <InputDiv>
          <label>내용: </label>
          <input type="text" value={description} name="description" onChange={onChangeHandler} />
        </InputDiv>
        <ButtonDiv>
          <button onClick={editDetailItem}>수정</button>
          <button onClick={deleteList}>삭제</button>
          <button onClick={() => navigate("/")}>뒤로가기</button>
        </ButtonDiv>
      </WrapContainer>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  /* border: none; */
  margin: 20% auto;
  padding: 1rem;
`;
const WrapContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;

  & input {
    margin: 1rem 0;
    width: 60%;
  }
`;
const InputDiv = styled.div`
  font-size: 1.4rem;
  display: flex;
  width: 60%;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: center;
  & label,
  input {
    margin: 1rem;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  margin: auto;
  & button {
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    margin: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
      background-color: var(--dark-blue);
      color: white;
    }
  }
`;

export default Details;
