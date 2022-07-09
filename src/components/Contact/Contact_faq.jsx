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
          <div className="question">
            <h3>
              1 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              elit risus malesuada?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
              risus malesuada purus a est, ac. Enim purus amet
            </p>
          </div>
          <div className="question">
            <h3>
              2 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              elit risus malesuada?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
              risus malesuada purus a est, ac. Enim purus amet
            </p>
          </div>
          <div className="question">
            <h3>
              3 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              elit risus malesuada?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
              risus malesuada purus a est, ac. Enim purus amet
            </p>
          </div>
          <div className="question">
            <h3>
              4 .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              elit risus malesuada?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat elit
              risus malesuada purus a est, ac. Enim purus amet
            </p>
          </div>
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
          <form name="query" data-netlify="true" enctype="multipart/form-data">
            <input type="text" placeholder="full name" name="Full Name" />
            <input type="email" placeholder="email" name="Email" />
            <input type="number" placeholder="phone number" name="Number" />
            <textarea placeholder="your query" name="Query" />
            <label>add product's image</label>
            <DragDrop />
            <button type="submit" className="btn btn-pri">
              Submit query
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_faq;
