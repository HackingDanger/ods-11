// Libs
import React from "react";
import * as S from "./styles";

// Components
import { Accordion } from "components";

// Images
import BgFAQ from "images/bg-faq.svg";
import BgGreenFAQ from "images/bg-green-faq.svg";
import BgGrayFAQ from "images/bg-gray-faq.svg";

export const Faq = ({ options }) => {
  return (
    <S.Container>
      <S.Header>
        <S.BoxBg>
          <img src={BgFAQ} alt="background" />
          <img src={BgGreenFAQ} alt="background" />
          <img src={BgGrayFAQ} alt="background" />
        </S.BoxBg>
        <h2>PERGUNTAS FREQUENTES</h2>
      </S.Header>
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
