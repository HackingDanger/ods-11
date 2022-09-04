import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #008043 ;
  
`

export const ImgVerde = styled.img`
  display: flex;
  position: absolute;
  top: 0.5rem;
`
export const ImgAmarelo = styled.img`
  display: flex;
  position: relative;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    color: #ffffff;
    font-size: 2.5rem;
    line-height: 3.25rem;
    font-weight: 700;
    text-align: center;
    position: absolute;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative;
    width: 25rem;
    left: 3.1rem;
    top: -12rem;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 29rem;
`

export const BoxTerminal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  select{
    border: none;
    border-radius: 20px;
    background-color: #006032;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.62rem;
    text-align: center;
    cursor: pointer;

    width: 10.62rem;
    height: 1.5rem;
  }

  h2{
    color: #ffffff;
    font-size: 0.875rem;
  }
`

export const BoxPrioridade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  h2{
    color: #ffffff;
    font-size: 0.875rem;
    text-align: center;
  }
`

export const BoxTitulo = styled.div`

  h2{
    color: #ffffff;
    font-size: 0.875rem;
    text-align: center;
  }

  select{
    border: none;
    border-radius: 20px;
    background-color: #006032;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.62rem;
    text-align: center;
    cursor: pointer;

    width: 10.62rem;
    height: 1.5rem;
  }
`

export const BoxDescricao = styled.div`

  textarea{
    width: 28.12rem;
    height: 11.12rem;

    background: #006032;
    border-radius: 25px;
  }

  h2{
    color: #ffffff;
    font-size: 0.875rem;
    text-align: center;
  }
`

export const BoxButton = styled.div`

  button{
    background: #ffffff;
    width: 9.37rem;
    height: 1.87rem;
    border: none;
    cursor: pointer;

    line-height: 1.12rem;
    letter-spacing: 0.25em;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 1.56rem;
    color: #006032;
    font-size: 0.875rem;
    text-align: center;
  }
`