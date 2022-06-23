import founder from "../../images/founder.png";

const About_founder = () => {
  return (
    <section className="about-founder row sec_cta">
      <div className="about-founder_img">
        <img src={founder} alt="founder_image" />
      </div>
      <div className="about-founder_content sec_cta-content">
        <p>
          “A rule that every industrialist must follow; <br /> Make the best
          quality of goods possible at the lowest cost possible, paying the
          highest wages possible.”
        </p>
      </div>
    </section>
  );
};

export default About_founder;
