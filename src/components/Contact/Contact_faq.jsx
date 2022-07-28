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
            <h3>1. What is the procedure to order the required items?</h3>
            <p>
              <ul>
                <li>
                  First, you need to select between <b>Hardware</b> and
                  <b> Steel</b>.
                </li>
                <li>List down the items you want to buy.</li>
                <li>
                  Click on the <b>Buy Now</b> button and fill the details
                  mentioned in the form.
                </li>
                <li>
                  You will receive a quote of your requirements on your
                  registered mail id within 48 hours.
                </li>
              </ul>
            </p>
          </div>
          <div className="question">
            <h3>
              2. How many days can I expect to hear from you after submitting my
              requirements?
            </h3>
            <p>
              You only have to wait for a maximum of 48 hours. If you still face
              any issues then mail us at: punittrading2004@gmail.com
            </p>
          </div>
          <div className="question">
            <h3>3. Do you provide any catalog of the list of items?</h3>
            <p>
              Yes, you can check the catalog of the items with the market price
              mentioned in the view more section of the categories under
              hardware and steel.
            </p>
          </div>
          <div className="question">
            <h3>4. Do you provide door-to-door delivery?</h3>
            <p>
              Yes, we provide door-to-door delivery but only for orders above
              20kg or Rs 5000.
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
          <form
            name="query-form"
            method="POST"
            data-netlify="true"
            enctype="multipart/form-data"
          >
            <input type="text" placeholder="full name" name="Full Name" />
            <input type="email" placeholder="email" name="Email" />
            <input type="number" placeholder="phone number" name="Number" />
            <textarea placeholder="your query" name="Query" />
            <label>add product's image</label>
            {/* <DragDrop /> */}
            <input name="file" type="file" />
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
