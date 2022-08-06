import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import process_1 from "../../images/process_1.webp";
import process_2 from "../../images/process_2.webp";
import process_3 from "../../images/process_3.webp";
const Process = () => {
  return (
    <section className="sec_process row">
      <div className="sec_process-heading">
        <h2 className="heading-section">
          Get Your Desired Products in <span> 3 Steps</span>
        </h2>
      </div>
      <div className="sec_process-content">
        <div className="sec_process-content--1">
          <div className="sec_process-content--1_content">
            <p>
              <span>
                <img src={one} alt="one" />
              </span>
              browse categories
            </p>
            <p>
              Check out the various categories listed and find the best fit for
              your needs.
            </p>
          </div>
          <div className="sec_process-content--1_img">
            <img src={process_1} alt="process_1" />
          </div>
        </div>

        <div className="sec_process-content--2">
          <div className="sec_process-content--2_content">
            <p>
              <span>
                <img src={two} alt="two" />
              </span>
              raise your query
            </p>
            <p>
              To let us know your requirements by filling out the “contact us”
              form.
            </p>
          </div>
          <div className="sec_process-content--2_img">
            <img src={process_2} alt="process_2" />
          </div>
        </div>

        <div className="sec_process-content--3">
          <div className="sec_process-content--3_content">
            <p>
              <span>
                <img src={three} alt="three" />
              </span>
              get solution
            </p>
            <p>
              One of our executives will reach out to you in no time with a real
              solution.
            </p>
          </div>
          <div className="sec_process-content--3_img">
            <img src={process_3} alt="process_3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
