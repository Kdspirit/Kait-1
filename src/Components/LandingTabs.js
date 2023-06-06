import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import FAQ from "./FAQ";
import AboutUsTab from "./AboutUsTab";
import LegalTab from "./LegalTab";
import { Link } from "react-router-dom";

const LandingTabs = () => {
  function handleTabClick(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
  return (
    <div className="landing-tabs-wrapper">
      <div id="home-tab" className=" tab">
        <div className="trade-mark">NETRA AI</div>
        <div className="home-container">
          <img
            className="kait-logo"
            src="/images/kaitHome.png"
            alt="kait-logo"
          />
          <div className="new-kind-emp">A NEW TYPE OF EMPLOYEE.</div>
        </div>
        <div className="home-btns">
          <Link to="demo-screen">
            <button className="redirect-btns">&#x2192;SEE DEMO</button>
          </Link>
          <Link to="early-access">
            <button className="redirect-btns">&#x2192; EARLY ACCESS</button>
          </Link>

          <Link to="careers">
            <button className="redirect-btns">&#x2192; CAREERS</button>
          </Link>
        </div>
      </div>

      <div id="faq-tab" className=" tab" style={{ display: "none" }}>
        <FAQ />
      </div>

      <div id="about-us-tab" className="tab" style={{ display: "none" }}>
        <AboutUsTab />
      </div>

      <div id="legal-tab" className="tab" style={{ display: "none" }}>
        <LegalTab />
      </div>
      {/* Navigation Tabs */}
      <div className="navigation-wrapper">
        <div
          className="navigation-tabs"
          onClick={() => handleTabClick("home-tab")}
        >
          <FontAwesomeIcon className="fa-imgs" icon={faHouse} size="2x" />
          <span className="tabs-name">Home</span>
        </div>
        <div
          className="navigation-tabs"
          onClick={() => handleTabClick("faq-tab")}
        >
          <FontAwesomeIcon
            className="fa-imgs"
            icon={faMagnifyingGlass}
            size="2x"
          />
          <span className="tabs-name">FAQ</span>
        </div>
        <div
          className="navigation-tabs"
          onClick={() => handleTabClick("about-us-tab")}
        >
          <img
            // width="32"
            // height="32"
            // color="#212529"
            src="/images/messageHome.png"
            alt="chat-message"
          />
          <span className="tabs-name">About Us</span>
        </div>
        <div
          className="navigation-tabs"
          onClick={() => handleTabClick("legal-tab")}
        >
          <FontAwesomeIcon className="fa-imgs" icon={faNewspaper} size="2x" />
          <span className="tabs-name">Legal</span>
        </div>
      </div>
    </div>
  );
};

export default LandingTabs;
