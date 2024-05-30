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
    if (!format.test(date)) return alert("유효한 날짜가 아닙니다. 날짜 형식 : YYYY-MM-YY");
    //금액이 음수나 0일 경우
    if (amount <= 0) return alert("입력 금액이 올바른지 확인해주세요");

    alert("수정되었습니다");

    dispatch(editData({ paramsId, edit }));
    navigate("/");
  };

  return (
    <DetailDiv>
      <WrapContainer>
        <InputDiv>
          <label>날짜: </label>
          <input
            type="text"
            value={date}
            name="date"
            onChange={onChangeHandler}
            placeholder="YYYY-MM-DD"
            autoComplete="off"
          />
        </InputDiv>
        <InputDiv>
          <label>항목: </label>
          <input type="text" value={item} name="item" onChange={onChangeHandler} placeholder="지출 항목" />
        </InputDiv>
        <InputDiv>
          <label>금액: </label>
          <input
            type="number"
            value={amount}
            name="amount"
            onChange={onChangeHandler}
            placeholder="금액"
            autoComplete="off"
          />
        </InputDiv>
        <InputDiv>
          <label>내용: </label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={onChangeHandler}
            placeholder="지출 내용"
            autoComplete="off"
          />
        </InputDiv>
        <ButtonDiv>
          <EditButton onClick={editDetailItem}>수정</EditButton>
          <DeleteButton onClick={deleteList}>삭제</DeleteButton>
          <HomeButton onClick={() => navigate("/")}>뒤로가기</HomeButton>
        </ButtonDiv>
      </WrapContainer>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  width: 80%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  /* border: none; */
  margin: 20% auto;
  padding: 1rem;
`;
const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    margin: 1rem 0;
    width: 60%;
  }
`;
const InputDiv = styled.div`
  white-space: nowrap;
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
  @media all and (max-width: 479px) {
    width: 90%;
    & label {
      font-size: 1rem;
    }
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  white-space: nowrap;
  margin: 10px auto;
  & button {
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    /* margin: 1rem; */
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media all and (max-width: 479px) {
    width: 90%;

    /* white-space: wrap; */
    & button {
      font-size: 0.8rem;
    }
  }
`;
const EditButton = styled.button`
  background-color: var(--blue);
  color: white;
  &:hover {
    background-color: var(--dark-blue);
  }
`;
const DeleteButton = styled.button`
  background-color: #ee2e2e;
  color: white;
  &:hover {
    background-color: #ab0000;
  }
`;
const HomeButton = styled.button`
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

export default Details;
