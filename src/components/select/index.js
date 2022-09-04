// Libs
import React, { useState } from "react";
import * as S from "./styles";

// Components
import { Icon } from "components/icon";

export const Select = ({ label, placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <S.Container>
      <label>
        {label}
      </label>
      <S.Select>
        <S.Header>
          <p>{selected || placeholder}</p>
          <S.BoxIcon onClick={() => setIsOpen(!isOpen)}>
            <Icon name="arrowGreen" />
          </S.BoxIcon>
        </S.Header>
        <S.Dropdown isOpen={isOpen}>
          {options?.map((item) => (
            <S.Options
              key={item.value}
              isSelected={item.name === selected}
              onClick={(e) => {
                setSelected(item.name);
                setIsOpen(false);
              }}
            >
              {item.name}
            </S.Options>
          ))}
        </S.Dropdown>
      </S.Select>
    </S.Container>
  );
};
