import DragDrop from "./DragDrop";
import { useState } from "react";
const Contact_faq = () => {
  // ! states to hold the form data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [query, setQuery] = useState();
  const [file, setFile] = useState(null);

  // ! function to handle the form submission
  const handleForm = async (e) => {
    e.preventDefault();
    const url =
      "https://hooks.slack.com/services/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";

    const data = {
      text: `Name: ${name}\n Email: ${email}\n Number: ${number}\n Query: ${query}\n Image: ${file}`,
    };
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post["Content-Type"];
          return data;
        },
      ],
    });

    if (res.status === 200) {
      alert("Meassage Sent");
      setName("");
      setEmail("");
      setNumber("");
      setQuery("");
      setFile(null);
    } else alert("error sending message");
  };

  return (
    <section className="contact_faq row" id="faq">
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
              <ul className="faq-list">
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
            <input
              type="text"
              placeholder="full name"
              name="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="phone number"
              name="Number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              placeholder="your query"
              name="Query"
              onChange={(e) => setQuery(e.target.value)}
            />
            <label>add product's image</label>
            <DragDrop setFile={setFile} />
            {/* <input name="file" type="file" /> */}
            <button
              type="submit"
              className="btn btn-pri"
              onClick={(e) => handleForm(e)}
            >
              Submit query
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_faq;
