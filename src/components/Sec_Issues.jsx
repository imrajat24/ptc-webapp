import issueImg1 from "../images/issue-1.png";
import issueImg2 from "../images/issue-2.png";
import issueImg3 from "../images/issue-3.png";

const Sec_Issues = () => {
  return (
    <section className="sec_issues row">
      <div className="sec_issues-heading">
        <h2 className="heading-section">issues in current market</h2>
        <h3 className="heading-section-secondary">
          Hardware market is filled with <span> SCAMS </span>which makes the
          whole system unorganized
        </h3>
      </div>
      <div className="sec_issues-images">
        <img src={issueImg1} alt="issue-img-1" />
        <img src={issueImg2} alt="issue-img-2" />
        <img src={issueImg3} alt="issue-img-3" />
      </div>
    </section>
  );
};

export default Sec_Issues;
