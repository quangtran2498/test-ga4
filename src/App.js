import "./App.css";
import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Dasboard from "./page/dasboard";
import gtag from "./page/gtag";
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
    abc: "31312312312",
  });
};
const createEvent2 = () => {
  ReactGA.gtag("event", "create event", {
    event_action: "quang test gtag",
    abc: "hihi",
  });
};
const createEvent3 = () => {
  gtag("event", "create event gtag", {
    test: "12132131231",
  });
};

// console.log("dasda", ReactGA.gtag);
// console.log("dasdsa", window["gtag"]);
function App() {
  return (
    <div className="App">
      <div style={style} onClick={createEvent}>
        create event 1
      </div>
      <div style={style} onClick={createEvent2}>
        create event 2
      </div>
      <div style={style} onClick={createEvent3}>
        create event 3
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dasboard" element={<Dasboard />} />
      </Routes>
    </div>
  );
}

export default App;
const style = {
  paddingBottom: "20px",
  cursor: "pointer",
};
