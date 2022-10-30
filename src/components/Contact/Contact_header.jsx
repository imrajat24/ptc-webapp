import phone from "../../images/contact_phone.png";
import message from "../../images/contact_message.png";
const Contact_header = () => {
  return (
    <div className="contact_header header">
      <div className="contact_header-content header_content">
        <div className="contact_header-content_heading header_content-heading">
          <h1>Let's Connect to Close the deal</h1>
          <h3>
            Get your query resolved in the quickest turnaround time in the
            entire industry
          </h3>
        </div>
      </div>
      <div className="contact_header-cards">
        <div className="contact_header-cards_card">
          <div className="contact_header-cards_card--icon">
            <img src={phone} alt="icon-phone" />
          </div>
          <div className="contact_header-cards_card--title">
            <h2>call now</h2>
          </div>
          <div className="contact_header-cards_card--content">
            <p> We're available on +917229876091 between 10AM - 7PM</p>
          </div>
          <div className="contact_header-cards_card--btn">
            <a href="tel:7229876091">
              <button className="btn btn-pri">call now</button>
            </a>
          </div>
        </div>

        <div className="contact_header-cards_card">
          <div className="contact_header-cards_card--icon">
            <img src={message} alt="icon-message" />
          </div>
          <div className="contact_header-cards_card--title">
            <h2>Leave Query</h2>
          </div>
          <div className="contact_header-cards_card--content">
            <p>We'd Love To Hear From You. Leave a query below.</p>
          </div>
          <div className="contact_header-cards_card--btn">
            <a href="#faq">
              <button className="btn btn-pri">leave a query</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_header;
