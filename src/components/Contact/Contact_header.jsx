import phone from "../../images/contact_phone.png";
import message from "../../images/contact_message.png";
const Contact_header = () => {
  return (
    <div className="contact_header header">
      <div className="contact_header-content header_content">
        <div className="contact_header-heading header_content-heading">
          <h1>Let's Connect to Close the deal</h1>
          <h3>
            Get your query resolved in the quickest turnaround time in the
            entire industry
          </h3>
        </div>
      </div>
      <div className="contact_header-cards">
        <div className="contact_header-card">
          <div className="contact_header-card--icon">
            <img src={phone} alt="icon-phone" />
          </div>
          <div className="contact_header-card--title">
            <h2>call now</h2>
          </div>
          <div className="contact_header-card--content">
            <p> Let's connect on a call between 10 am-5 pm</p>
          </div>
          <div className="contact_header-card--btn">
            <button className="btn btn-pri">call now</button>
          </div>
        </div>

        <div className="contact_header-card">
          <div className="contact_header-card--icon">
            <img src={message} alt="icon-message" />
          </div>
          <div className="contact_header-card--title">
            <h2>Leave Query</h2>
          </div>
          <div className="contact_header-card--content">
            <p>We'd Love To Hear From You. Here's How You Can Reach Us.</p>
          </div>
          <div className="contact_header-card--btn">
            <button className="btn btn-pri">leave a query</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_header;
