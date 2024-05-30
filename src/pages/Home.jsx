import React from "react";
import styled from "styled-components";
import ChoiceMonth from "../components/ChoiceMonth";
import Container from "../components/Container";
import Form from "../components/Form";
import MonthSpending from "../components/MonthSpending";
import ReportList from "../components/ReportList";

export default function () {
  return (
    <Container>
      <Form />
      <ChoiceMonth />
      <MonthSpending />
      <ReportList />
    </Container>
  );
}

export const Section = styled.section`
  background-color: white;
  border-radius: 10px;
  margin: 20px 0;
  padding: 0.5rem 1rem;
`;
