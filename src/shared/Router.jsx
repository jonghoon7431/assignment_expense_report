import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Router = () => {
  const [data, setData] = useState([
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
      date: "2024-02-02",
      item: "식비",
      amount: 50000,
      description: "회식",
    },
  ]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route path="details" element={<Details data={data} setData={setData} />} />
          <Route path="details/:id" element={<Details data={data} setData={setData} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
