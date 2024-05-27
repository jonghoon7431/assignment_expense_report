import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";

const ReportList = ({ activeMonth }) => {
  const { data } = useContext(DataContext);

  return (
    <ReportListContainer>
      <H3
        style={{
          paddingTop: "1.5rem",
          paddingLeft: "2rem",
        }}
      >
        내역
      </H3>
      <ReportListUl>
        {data
          .filter((prevData) => Number(prevData.date.split("-")[1]) === activeMonth)
          .map((data) => (
            //상세내역으로 이동
            <Link
              to={`details/${data.id}`}
              key={data.id}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <List>
                <H3 style={{ marginBottom: "1rem" }}>{data.date}</H3>
                <p>
                  {data.item}-{data.description}
                </p>
              </List>
            </Link>
          ))}
      </ReportListUl>
    </ReportListContainer>
  );
};

const ReportListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 450px;
  overflow: auto;
`;
const H3 = styled.h3`
  font-weight: bold;
`;
const ReportListUl = styled.ul`
  padding: 1rem;
`;
const List = styled.li`
  border: 1px solid var(--light-blue);
  border-radius: 10px;
  margin: 10px;
  padding: 1rem;
  box-shadow: 1px 1px 1px 2px var(--blue);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s all;
  }
`;

export default ReportList;
