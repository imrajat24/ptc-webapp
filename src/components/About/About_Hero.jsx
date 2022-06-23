import hero_img from "../../images/about_hero.png";
const About_Hero = () => {
  return (
    <div className="about-hero row">
      <div className="about-hero_heading">
        <h1>
          <span>Punit Trading Company </span>is on a mission to source countless
          products in hardware and structural steel to each & every house of
          India & beyond.
        </h1>
        <p></p>
      </div>
      <div className="about-hero_story">
        <div className="about-hero_story--img">
          <img src={hero_img} alt="team-image" />
        </div>
        <div className="about-hero_story--content">
          <h2 className="heading-section">our story</h2>
          <p>
            It all started way back in 1993 when we had commenced our firm and
            named it “Punit Trading Company” with a motive of making every
            hardware-related product available in one place. Then, the motive
            started expanding with the expansion of our store from a small one
            consisting of only a few accessories to a large store with our
            godowns as well.
          </p>
          <p>
            In the meantime, we partnered with some prestigious brands like
            Asian paints, Berger paints, TATA Agrico, UNIK, JCB, Hikoki, and
            many more to give variety to our customers. Now, a family-owned and
            operated business has become the region’s best distributor
            especially in hardware products that support industrial houses and
            manufacturers for all their requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Hero;
