// Libs
import React, { useState } from "react";
import * as S from "./styles";

// Components
import { Icon } from "components/icon";

export const Accordion = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.FAQ>
      <S.Header onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <h3>{title}</h3>
        <Icon name="arrow" />
      </S.Header>
      <S.Content isOpen={isOpen}>
        <p>{desc}</p>
      </S.Content>
    </S.FAQ>
  );
};
