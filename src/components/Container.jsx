import React from "react";
import styled from "styled-components";
import ChoiceMonth from "./ChoiceMonth";
import Form from "./Form";

const Container = ({ data, setData }) => {
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
