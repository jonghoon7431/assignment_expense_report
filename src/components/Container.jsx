import React, { useState } from "react";
import styled from "styled-components";
import ChoiceMonth from "./ChoiceMonth";
import Form from "./Form";

const Container = () => {
  const [data, setData] = useState([
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
      date: "2024-02-02",
      item: "식비",
      amount: 50000,
      description: "회식",
    },
  ]);

  return (
    <WrapContainer>
      <Form setData={setData} />
      <ChoiceMonth data={data} />
    </WrapContainer>
  );
};

const WrapContainer = styled.div`
  height: auto;
  padding: 5px 20px;
  margin: 20px auto;
  background-color: var(--light-blue);
  border-radius: 10px;
`;

export default Container;
