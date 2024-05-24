import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { ExpenseData } from "../context/DataContext";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ExpenseData>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="details" element={<Details />} /> */}
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </ExpenseData>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
