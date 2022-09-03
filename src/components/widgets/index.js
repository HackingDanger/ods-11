// Libs
import React from "react";

// Styles
import * as S from "./styles";

export const Widgets = ({ title, desc}) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{desc}</p>
    </S.Container>
  );
};