// Components
import { Faq } from "components";

// Data
import { dataFAQ } from "data/faq.data";

export const Form = () => {
  return (
    <div className="App">
      <Faq options={dataFAQ} />
    </div>
  );
};
