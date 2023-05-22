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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3516.4956085860317!2d76.85452033366259!3d28.19225127200848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37b955555555%3A0xf6a7812e5bd0de32!2sPunit%20Trading%20Company!5e0!3m2!1sen!2sin!4v1684776159798!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Sec_location;
