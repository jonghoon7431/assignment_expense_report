import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <StBackground>
      <StMain>{children}</StMain>
    </StBackground>
  );
}

export default Layout;

const StBackground = styled.div`
  position: fixed;
  background-color: var(--blue);
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
const StMain = styled.main`
  display: flex;
  justify-content: center;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    /* width: 380px; */
    margin: 1rem 2rem;
  }
`;
