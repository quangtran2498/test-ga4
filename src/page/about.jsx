import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
ReactGA.initialize("G-VZ6T7SQ29E");
ReactGA.send("pageview");

const About = () => {
  const navigate = useNavigate();

  const createEvent = () => {
    ReactGA.gtag("event", "quang test about", {
      event_action: "quang test gtag",
      about: "12345",
    });
    navigate("/");
  };
  return (
    <div>
      <div onClick={createEvent}>navigate home</div>
    </div>
  );
};

export default About;
