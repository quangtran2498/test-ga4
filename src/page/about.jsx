import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
// ReactGA.initialize("G-VZ6T7SQ29E");
ReactGA.send({ hitType: "pageview", page: "/about" });
const About = () => {
  const navigate = useNavigate();

  const createEvent = () => {
    ReactGA.gtag("event", "create add event", {
      event_action: "quang test gtag",
      about: "12345",
    });
    // const gtag = window["gtag"];
    // gtag("event", "about", {
    //   about: "1234566778",
    // });
    // navigate("/dasboard");
  };
  return (
    <div>
      <div onClick={createEvent}>navigate home</div>
    </div>
  );
};

export default About;
