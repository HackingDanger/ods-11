// Libs
import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";

//imagens
import { Title, Select } from "components";

export function Form() {
  const [data, setData] = useState();

  const handleSubmit = () => {
    console.log(data)
  };

  return (
    <S.Container>
      <Title label="Queremos sua opnião" />

      <S.Box>
        <Select
          label="Terminal mais próximo"
          placeholder="selecione"
          options={[
            { name: "Terminal Volta Redonda (5km)", value: "5" },
            { name: "Terminal Volta Redonda (4km)", value: "4" },
            { name: "Terminal Volta Redonda (3km)", value: "3" },
            { name: "Terminal Volta Redonda (2km)", value: "2" },
          ]}
          onChange={(e) => setData({ ...data, Area_Locate: e })}
        />

        <S.BoxPrioridade>
          <h2>Nivel de prioridade</h2>

          <form>
            <input type="radio" name="prioridade" value="op1"></input>
            <input type="radio" name="prioridade" value="op2"></input>
            <input type="radio" name="prioridade" value="op3"></input>
            <input type="radio" name="prioridade" value="op4"></input>
            <input type="radio" name="prioridade" value="op5"></input>
            <input type="radio" name="prioridade" value="op6"></input>
          </form>
        </S.BoxPrioridade>
      </S.Box>

      <Select
        label="Título"
        placeholder="selecione"
        options={[
          { name: "Teste testando", value: "5" },
          { name: "Teste testando", value: "4" },
          { name: "Teste testando", value: "3" },
          { name: "Teste testando", value: "2" },
        ]}
        onChange={(e) => setData({ ...data, Info_Type: e })}
      />

      <S.BoxDescricao>
        <h2>Descrição</h2>
        <textarea
          onChange={(e) => {
            const { value } = e.target;
            setData({ ...data, Info_Description: value });
          }}
        />
      </S.BoxDescricao>

      <S.BoxButton>
        <button onClick={() => handleSubmit()}>Enviar</button>
      </S.BoxButton>
    </S.Container>
  );
}
