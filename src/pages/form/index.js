// Libs
import React from "react";
import styled from "styled-components";

// Components
import { Faq , Form } from "components";

// Data
import { dataFAQ } from "data/faq.data";

// Styles 
const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`

export const FormPage = () => {
  return (
    <Container>
      <Form />
      <Faq options={dataFAQ} />
    </Container>
  );
};