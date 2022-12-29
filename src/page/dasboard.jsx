import React from "react";
import ReactGA from "react-ga4";

const onEvent = () => {
  ReactGA.gtag("event", "login", {
    method: "Google",
  });
};
const Dasboard = () => {
  return <div onClick={onEvent}>Dasboard</div>;
};

export default Dasboard;
