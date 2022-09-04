// Components
import { Faq , Form } from "components";

// Data
import { dataFAQ } from "data/faq.data";

export const Form = () => {
  return (
    <div className="App">
      <Form />
      <Faq options={dataFAQ} />
    </div>
  );
};
