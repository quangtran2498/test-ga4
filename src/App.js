import "./App.css";
import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Dasboard from "./page/dasboard";
import gtag from "./page/gtag";
//!
ReactGA.initialize("G-VZ6T7SQ29E");
const measurement_id = "G-VZ6T7SQ29E"
const api_secret = "dH0ZWqTvReWoYTUJiVK9Vw"
// ReactGA.initialize("G-GL0NXS0STE");
 const testApiGa = () => {
  fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
  method: "POST",
  body: JSON.stringify({
    client_id: '12345.12345',
    events: [{
      name: 'push event',
      params: {
        quangTestPushEvent:"da lam"
      },
    }]
  })
});
 }
// ReactGA.send("pageview");
const createEvent = () => {
  // ReactGA.event({
  //   category: "your category",
  //   action: "your action",
  //   label: "your label", // optional
  //   value: 99, // optional, must be a number
  //   nonInteraction: true, // optional, true/false
  //   transport: "xhr", // optional
  //   // quangtest: "1234", //! ko nhận
  //   dimension: "quang test",
  // });
  testApiGa()
  ReactGA.gtag("event", "quang test", {
    event_action: "quang test gtag",
    abc: "31312312312",
    engagement_time_msec: new Date().getTime(),
    session_id: "123",
  });
};
const createEvent2 = () => {
  testApiGa()
  ReactGA.gtag("event", "create event", {
    event_action: "quang test gtag",
    abc: "hihi",
    engagement_time_msec: new Date().getTime(),
    session_id: "123",
  });
  // console.log("get time", new Date().getTime());
};
const createEvent3 = () => {
  testApiGa()
  gtag("event", "create event gtag", {
    test: "12132131231",
    engagement_time_msec: new Date().getTime(),
    session_id: "123",
  });
};


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
