import React from "react";
import ChoiceMonth from "../components/ChoiceMonth";
import Container from "../components/Container";
import Form from "../components/Form";
import MonthSpending from "../components/MonthSpending";
import ReportList from "../components/ReportList";
const Home = () => {
  return (
    <Container>
      <Form />
      <ChoiceMonth />
      <MonthSpending />
      <ReportList />
    </Container>
  );
};

export default Home;
