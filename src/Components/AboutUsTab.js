import React from "react";
import '../css/aboutUsTab.css';

const AboutUsTab = () => {
  return (
    <div>
      <section>
        <img src="/images/Kait2.png" alt="kait-logo"/>
        <div className="logo-text">A NEW TYPE OF EMPLOYEE.</div>
      </section>
      <section className="faq-section">
        <div className="faq-text">
          <h3>Our Story</h3>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="faq-qna">
          <div className="stories story-1">
            <img
              className="story-img story-img-1"
              src="/images/storyDummy.png"
              alt="stoty-img"
            />
            <p className="story-texts story-texts-1">
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="stories story-2">
            <p className="story-texts story-texts-2">
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img
              className="story-img story-img-2"
              src="/images/storyDummy.png"
              alt="stoty-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsTab;
