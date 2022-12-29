import "./App.css";
import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Dasboard from "./page/dasboard";
//!
ReactGA.initialize("G-VZ6T7SQ29E");
// ReactGA.send("pageview");
const createEvent = () => {
  // ReactGA.event({
  //   category: "your category",
  //   action: "your action",
  //   label: "your label", // optional
  //   value: 99, // optional, must be a number
  //   nonInteraction: true, // optional, true/false
  //   transport: "xhr", // optional
  //   quangtest: "1234", //! ko nhận
  //   dimension: "quang test",
  // });
  ReactGA.gtag("event", "quang test", {
    event_action: "quang test gtag",
    abc: "quang test thanh cong",
  });
};
const createEvent2 = () => {
  ReactGA.gtag("event", "create event", {
    event_action: "quang test gtag",
    abc: "hihi",
  });
};
// console.log("dasda", ReactGA.gtag);
// console.log("dasdsa", window["gtag"]);
function App() {
  return (
    <div className="App">
      <div onClick={createEvent}>quang test ga4 </div>
      <div onClick={createEvent2}>quang test ga4 </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dasboard" element={<Dasboard />} />
      </Routes>
    </div>
  );
}

export default App;
