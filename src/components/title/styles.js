// Libs
import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  max-width: 578px;
  height: 182px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    width: 45%;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    z-index: 3;
  }

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    :nth-child(2) {
      top: -30px;
      left: -10px;
    }
  }
`;
;