// Libs
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Utils
import { dashboard } from "data/dashboard";

// Components
import {Dashboard, Widgets} from "components";

// Styles
const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
`;

const Graph = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export const DashboardPage = () => {
  const [uf, setUf] = useState([]);
  const [registeredStates, setRegisteredStates] = useState();

  const handleFilterUF = () => {
    const filterUF = dashboard?.filter((item, index, self) => {
      return index === self.findIndex((t) => t.uf === item.uf);
    });

    setUf(filterUF?.map((item) => item.uf));
  };

  const handleGetUF = () => {
    let counts = {};
    dashboard.forEach((x) => {
      counts[x.uf] = (counts[x.uf] || 0) + 1;
    });

    setRegisteredStates(counts);
  };

  useEffect(() => {
    handleFilterUF();
    handleGetUF();
  }, []);

  return (
    <Container>
      <Graph>
        <Widgets title="Cadastrados:" desc={dashboard.length} />
        <Widgets title="Estados:" desc={uf.length} />
      </Graph>
      <Dashboard labels={uf} data={registeredStates} />
    </Container>
  );
};
