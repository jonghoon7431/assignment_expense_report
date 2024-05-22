import React, { useState } from "react";
import styled from "styled-components";
import ChoiceMonth from "./ChoiceMonth";
import Form from "./Form";

const WrapContainer = styled.div`
  height: auto;
  padding: 5px 20px;
  margin: 20px auto;
  background-color: var(--light-blue);
  border-radius: 10px;
`;
const Container = () => {
  const [data, setData] = useState([
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
  ]);
  console.log(data);
  return (
    <WrapContainer>
      <Form setData={setData} />
      <ChoiceMonth />
    </WrapContainer>
  );
};

export default Container;
