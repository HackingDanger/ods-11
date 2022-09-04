// Libs
import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  > div:nth-child(even) {
    > div {
      background: #408865;
      :nth-child(2) {
        background: #006032; 
      }
    }
  }
`;
