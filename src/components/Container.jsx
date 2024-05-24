import React from "react";
import styled from "styled-components";
import ChoiceMonth from "./ChoiceMonth";
import Form from "./Form";

const Container = () => {
  return (
    <WrapContainer>
      <Form />
      <ChoiceMonth />
    </WrapContainer>
  );
};

const WrapContainer = styled.div`
  height: auto;
  padding: 2rem;
  margin: 20px auto;
  background-color: var(--light-blue);
  border-radius: 10px;
`;

export default Container;
