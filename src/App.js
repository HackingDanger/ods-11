// Components
import { Faq } from "components";

// Data
import { dataFAQ } from "data/faq.data";

function App() {
  return (
    <div className="App">
      <Faq options={dataFAQ} />
    </div>
  );
}

export default App;
