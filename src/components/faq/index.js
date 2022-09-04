// Libs
import React from "react";
import * as S from "./styles";

// Components
import { Accordion } from "components";

export const Faq = ({ options }) => {
  return (
    <S.Container>
      {options?.map((item) => (
        <Accordion
          key={item.title + Math.random() * 100}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </S.Container>
  );
};
