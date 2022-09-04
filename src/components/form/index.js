import React from "react";
import * as S from "./styles";

//imagens
import Img from "../../images/Vector 1.svg";
import Imge from "../../images/Vector 2.svg";
import { Title } from "components/title";
import { Select } from "components/select";

export function Form() {
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
        />

      <S.BoxDescricao>
        <h2>Descrição</h2>
        <textarea></textarea>
      </S.BoxDescricao>

      <S.BoxButton>
        <button>Enviar</button>
      </S.BoxButton>
    </S.Container>
  );
}
