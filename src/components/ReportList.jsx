import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ReportList = ({ data, activeIndex }) => {
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
          .filter((prevData) => Number(prevData.date[6]) === activeIndex + 1)
          .map((data) => (
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
  border: 1px solid var(--blue);
  margin: 10px;
  padding: 1rem;
  cursor: pointer;

  /* box-shadow: 5px 5px 5px 5px grey; */
`;

export default ReportList;
