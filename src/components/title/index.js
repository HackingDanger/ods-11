// Libs
import React from "react";
import * as S from "./styles";

// Images
import BGTitle from "images/bg-title.svg";
import BGShadowTitle from "images/bg-shadow-title.svg";

export const Title = ({ label }) => {
  return (
    <S.Container>
      <img src={BGShadowTitle} alt="background" />
      <img src={BGTitle} alt="background" />
      <h1>{label}</h1>
    </S.Container>
  );
};
