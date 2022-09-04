// Libs
import styled, { css } from "styled-components";

export const FAQ = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  ${({ isOpen }) => css`
    min-height: 41px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    background: #006032;

    z-index: 1;
    cursor: pointer;
    h3 {
      flex: 1;
      color: #fff;
    }

    figure {
      margin-left: 0.8rem;
      transform: ${isOpen && "rotate(60deg)"};
    }
  `}
`;

export const Content = styled.div`
  ${({ isOpen }) => css`
    width: 100%;
    max-height: 0;
    min-height: ${isOpen ? "100px" : "0"};

    background: #0e3a25;
    margin: -20.5px auto 2rem;
    padding: ${isOpen ? "2rem 1.5rem" : "0 1.5rem"};
    border-radius: 0 0 25px 25px;

    overflow: hidden;
    transition: 0.5s;
    p {
      color: #fff;
    }
  `}
`;
