import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import "../css/landing.css";
import { primaryColor, secondaryColor, textColor } from "../consts/colors";
import LandingTabs from "../Components/LandingTabs";

const Landing = () => {
  const { todos } = useContext(GlobalContext);
  console.log("todos", todos);

  return (
    <div className="landing-wrapper">
      <LandingTabs />
    </div>
  );
};

export default Landing;
