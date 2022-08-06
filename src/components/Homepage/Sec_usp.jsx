import usp_hero from "../../images/usp_hero.webp";
import usp_1 from "../../images/usp_1.webp";
import usp_2 from "../../images/usp_2.webp";
import usp_3 from "../../images/usp_3.webp";
import usp_4 from "../../images/usp_4.webp";

const Sec_usp = () => {
  return (
    <div className="sec_usp">
      <div className="sec_usp-header">
        <img src={usp_hero} alt="header" />
      </div>
      <div className="sec_usp-content">
        <img src={usp_1} alt="usp_1" className="usp_1" />
        <img src={usp_2} alt="usp_2" className="usp_2" />
        <img src={usp_3} alt="usp_3" className="usp_3" />
        <img src={usp_4} alt="usp_4" className="usp_4" />
      </div>
    </div>
  );
};

export default Sec_usp;
