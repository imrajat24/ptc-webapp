const Sec_location = () => {
  return (
    <div className="sec_location">
      <div className="sec_location-text">
        <h3>Location</h3>
        <p>
          Opp. 132 kb GSS, RSEB, Neelam Chowk, Bhiwadi, Alwar Rajasthan - 301019
        </p>
      </div>
      <div className="mapouter sec_location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56268.015996759685!2d76.78815378755986!3d28.184487166156693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37f869999489%3A0xdc24c0dd31c27f96!2sPUNIT%20TRADING%20COMPANY!5e0!3m2!1sen!2sin!4v1654331530131!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Sec_location;
