// Components
import { Faq , Form } from "components";

// Data
import { dataFAQ } from "data/faq.data";

// Pages
import { DashboardPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Form />
      <Faq options={dataFAQ} />
      <DashboardPage />
    </div>
  );
}

export default App;
