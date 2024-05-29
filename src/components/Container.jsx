import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <WrapContainer>{children}</WrapContainer>;
};

const WrapContainer = styled.div`
  height: auto;
  padding: 2rem;
  margin: 20px auto;
  background-color: var(--light-blue);
  border-radius: 10px;
`;

export default Container;
