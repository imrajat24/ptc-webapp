import Nav from "../components/Homepage/Navigation";
import Footer from "../components/Homepage/Footer";
import ModalImage from "react-modal-image";

const Certificates = ({ isClicked, setIsClicked }) => {
  return (
    <>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked} />
      <header className="item_content_header item_header header certificate__header">
        <div className="item_content item_header-content">
          <div className="item_header-content--heading">
            <h2 className="item-heading heading-section">certificates</h2>
          </div>
        </div>
      </header>
      <div className="certificates__content row">
        <div className="imageGallery">
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703688/PTC/certificates/jcb_dbbmez.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703688/PTC/certificates/jcb_dbbmez.jpg"
              alt="JCB PROFESSIONAL-Certificate"
              className="modal-pot"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703691/PTC/certificates/fosroc_ud3src.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703691/PTC/certificates/fosroc_ud3src.jpg"
              alt="FOSROC-Certificate"
              className="modal-pot"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/nvrValve_wn0ohq.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/nvrValve_wn0ohq.jpg"
              alt="NVR VALVES-Certificate"
              className="modal-pot"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/twintech_cbbllx.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/twintech_cbbllx.jpg"
              alt="TWIN TECH-Certificate"
              className="modal-pot"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/asianPaint_fxu5ta.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/asianPaint_fxu5ta.jpg"
              alt="ASIAN PAINTS-Certificate"
              className="modal-pot"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703688/PTC/certificates/uniqueMarble_otsox8.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703688/PTC/certificates/uniqueMarble_otsox8.jpg"
              alt="UNIQUE MALLEABLES-Certificate"
              className="modal-pot"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703690/PTC/certificates/yuva_z5h4yy.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703690/PTC/certificates/yuva_z5h4yy.jpg"
              alt="Great Yuva-Certificate"
              className="modal-land"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1667155679/PTC/certificates/caparo_p9opau.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1667155679/PTC/certificates/caparo_p9opau.jpg"
              alt="CAPARO-Certificate"
              className="modal-land"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1667155678/PTC/certificates/ferroterro_qjm9zq.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1667155678/PTC/certificates/ferroterro_qjm9zq.jpg"
              alt="FERRETERRO-Certificate"
              className="modal-land"
            />
          </div>
          <div className="image">
            <ModalImage
              small="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/hindbro_svpagv.jpg"
              large="https://res.cloudinary.com/dlghjr9qx/image/upload/v1663703689/PTC/certificates/hindbro_svpagv.jpg"
              alt="HINDBRO-Certificate"
              className="modal-land"
            />
          </div>
        </div>
      </div>
      <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};

export default Certificates;
