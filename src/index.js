// Libs
import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

// Components
import App from "./App";

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
  <>
    <GlobalStyles />
    <App />
  </>
);
