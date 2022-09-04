import React from 'react'
import * as S from "./styles";

//imagens

import Img from '../../images/Vector 1.svg';
import Imge from '../../images/Vector 2.svg';


export default function Form() {
  return (
    <S.Container>

      <S.Header>
        <S.ImgAmarelo src={Img} alt="#" />
        <S.ImgVerde src={Imge} alt="#" />
        <h1>Queremos sua opnião</h1>
      </S.Header>

      <S.Box>

        <S.BoxTerminal>

          <h2>Terminal mais próximo</h2>

          <select>
            <option value="opcao1">Terminal Volta Redonda (5km)</option>
            <option value="opcao2">Terminal Volta Redonda (4km)</option>
            <option value="opcao3">Terminal Volta Redonda (3km)</option>
            <option value="opcao4">Terminal Volta Redonda (2km)</option>
          </select>

        </S.BoxTerminal>

        <S.BoxPrioridade>

          <h2>Nivel de prioridade</h2>

          <form>
            <input type="radio" name="opcao1" value="op1"></input>
            <input type="radio" name="opcao2" value="op2"></input>
            <input type="radio" name="opcao3" value="op3"></input>
            <input type="radio" name="opcao4" value="op4"></input>
            <input type="radio" name="opcao5" value="op5"></input>
            <input type="radio" name="opcao6" value="op6"></input>
          </form>

        </S.BoxPrioridade>

      </S.Box>

      <S.BoxTitulo>

        <h2>Título</h2>
        
        <select>
          <option value="opcao1">Selecione o título</option>
          <option value="opcao2">Selecione o título</option>
          <option value="opcao3">Selecione o título</option>
          <option value="opcao4">Selecione o título</option>
        </select>

      </S.BoxTitulo>

      <S.BoxDescricao>
        <h2>Descrição</h2>
        <textarea></textarea>
      </S.BoxDescricao>

      <S.BoxButton>
        <button>Enviar</button>
      </S.BoxButton>
    
    </S.Container>
  )
}
