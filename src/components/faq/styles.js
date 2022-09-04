// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  > div:nth-child(even) {
    > div {
      background: #408865;
      :nth-child(2) {
        background: #006032;
      }
    }
  }
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 305px;

  display: flex;
  align-items: flex-end;

  margin-bottom: 65px;

  h2 {
    width: 227px;
    padding: 29px;

    color: #b98b13;
    font-size: 40px;

    z-index: 5;
  }
`;

export const BoxBg = styled.figure`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  img {
    position: absolute;
    left: 0;
    bottom: 0;

    :first-child {
      z-index: 3;
    }

    :nth-child(2) {
      bottom: 8%;
      z-index: 2; 
    }

    :last-child {
      bottom: -14%;
      z-index: 1;
    }
  }
`;
