// Components
import { Faq } from "components";

// Data
import { dataFAQ } from "data/faq.data";

// Pages
import { DashboardPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Faq options={dataFAQ} />
      <DashboardPage />
    </div>
  );
}

export default App;
