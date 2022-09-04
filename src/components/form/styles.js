import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 29px;

  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Box = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 62.5px 0 33px;
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

export const BoxDescricao = styled.div`
  margin: 53px 0 30px;

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
    margin-bottom: 1rem;
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