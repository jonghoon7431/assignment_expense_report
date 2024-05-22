import React from "react";
import styled from "styled-components";

const StBackground = styled.div`
  position: fixed;
  background-color: #71a1cd;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
const StMain = styled.main`
  width: 900px;
  margin: 0 auto;
`;

function Layout({ children }) {
  return (
    <StBackground>
      <StMain>{children}</StMain>
    </StBackground>
  );
}

export default Layout;
