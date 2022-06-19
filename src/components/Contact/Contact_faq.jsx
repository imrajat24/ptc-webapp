import Slider_faq from "../../components/Contact/Slider_faq";
import DragDrop from "./DragDrop";
const Contact_faq = () => {
  return (
    <section className="contact_faq row">
      <div className="contact_faq--faq">
        <div className="contact_faq--faq-sec-heading">
          <p>
            We've listed some common questions as FAQs that people generally
            asked about hardware & steel trading.
          </p>
        </div>
        <div className="contact_faq--faq-pri-heading">
          <h2 className="heading-section">FAQ's</h2>
        </div>
        <div className="contact_faq--faq-questions">
          <Slider_faq />
        </div>
      </div>
      <div className="contact_faq--query">
        <div className="contact_faq--query-pri-heading">
          <h2 className="heading-section">leave a query</h2>
          <h4>
            Mention your details with as much perfection as our services.😁
          </h4>
        </div>
        <div className="contact_faq--query-form">
          <form action="" enctype="multipart/form-data">
            <input type="text" placeholder="full name" name="Full Name" />
            <input type="email" placeholder="email" name="Email" />
            <input type="number" placeholder="phone number" name="Number" />
            <textarea placeholder="your query" name="Query" />
            <DragDrop />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="contact_faq--form"></div>
    </section>
  );
};

export default Contact_faq;

// ! CSS to remove the up and down arrows of the num type

/* Chrome, Safari, Edge, Opera */
// input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }

// /* Firefox */
// input[type=number] {
//   -moz-appearance: textfield;
// }
