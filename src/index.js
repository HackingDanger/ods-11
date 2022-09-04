// Libs
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// Pages
import { FormPage, DashboardPage } from "pages";

// Styles
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Antonio, Arial, Helvetica, sans-serif;
    }

    body {
        background: #008043;    
    }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <Route index path="/" element={<Navigate to="/form" replace />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);
