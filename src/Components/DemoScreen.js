import React from "react";
import "../css/aboutUsTab.css";
import '../css/demoScreen.css'

const DemoScreen = () => {
  return (
    <div className="landing-wrapper">
      <section>
        <img src="/images/Kait2.png" alt="kait-logo" />
        <div className="logo-text">A NEW TYPE OF EMPLOYEE.</div>
      </section>
      <section className="faq-section">
        <div className="faq-text">
          <h3>Are You ready?</h3>
          <p className="">
            Sign up now and get on the list to experience a new type of
            employee.
          </p>
          <button className="early-access-btn">Request Early Access</button>
        </div>
        <div className="faq-qna">
          <img
            className="demo-screen-img"
            src="/images/broken-img.png"
            alt="kait-logo"
          />
        </div>
      </section>
    </div>
  );
};

export default DemoScreen;
