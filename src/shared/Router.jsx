import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
