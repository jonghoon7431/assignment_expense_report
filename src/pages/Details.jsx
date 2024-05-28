import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteData, editData } from "../redux/slices/formSlice";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const paramsId = params.id;

  const data = useSelector((state) => state.data);
  const detailData = data.find((data) => data.id === paramsId);

  //삭제
  const deleteList = () => {
    if (!confirm("정말 이 항목을 삭제하시겠습니까?")) return;
    dispatch(deleteData(detailData));
    alert("삭제되었습니다");
    navigate("/");
  };

  //수정
  const newData = {
    id: detailData.id,
    date: detailData.date,
    item: detailData.item,
    amount: detailData.amount,
    description: detailData.description,
  };
  const [edit, setEdit] = useState(newData);

  const { date, item, amount, description } = edit;

  const onChangeHandler = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const editDetailItem = () => {
    //빈칸 입력시
    if (!date.trim() || !item.trim() || !amount) return alert("날짜, 항목, 금액은 공백 입력이 불가합니다");
    //날짜 유효성검사 yyyy-mm-dd
    const format = /^(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!format.test(date)) return alert("날짜가 유효하지 않습니다. 날짜 형식 : YYYY-MM-YY");

    alert("수정되었습니다");
    dispatch(editData({ paramsId, edit }));
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
