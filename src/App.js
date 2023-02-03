import "./App.css";
import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Dasboard from "./page/dasboard";
import gtag from "./page/gtag";

//!
ReactGA.initialize("G-VZ6T7SQ29E");
// ReactGA.initialize("G-GL0NXS0STE");
const measurement_id = "G-VZ6T7SQ29E";
const api_secret = "dH0ZWqTvReWoYTUJiVK9Vw";
const testApiGa = () => {
  fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`,
    {
      method: "POST",
      body: JSON.stringify({
        client_id: "225262123.1671789778",
        events: [
          {
            name: "push event",
            params: {
              quangTestPushEvent: "da lam",
              engagement_time_msec: "100",
              session_id: "123",
            },
          },
        ],
      }),
    }
  );
};
// ReactGA.send("pageview");
const createEvent = () => {
  ReactGA.gtag("event", "quang test", {
    event_action: "quang test gtag",
    abc: "31312312312",
    engagement_time_msec: new Date().getTime(),
    session_id: "123",
  });
};
const createEvent2 = () => {
  ReactGA.gtag("event", "create event", {
    event_action: "quang test gtag",
    abc: "hihi",
    engagement_time_msec:"100",
    session_id: "123",
  });
};
const createEventOnIosWithNormalWeb = () => {
  ReactGA.gtag("event", "On Ios With NormalWeb", {
    event_action: "quang test gtag",
    abc: "hihi",
    engagement_time_msec:"100",
    session_id: "123",
    content:'đã tạo được event trên ios với web thông thường'
  });
};

const createEventOnAndroidWithZaloMiniApp = () => {
  ReactGA.gtag("event", "On Android With ZaloMiniApp", {
    event_action: "quang test gtag",
    abc: "hihi",
    engagement_time_msec:"100",
    session_id: "123",
    content:'đã tạo được event trên android với zalo mini app'

  });
};
function App() {
  return (
    <div className="App">
      <div className="high-light" style={style} onClick={createEvent}>
        create event by methor ga
      </div>
      <div className="high-light" style={style} onClick={createEvent2}>
        create event by methor ga
      </div>
      <div className="high-light" style={style} onClick={testApiGa}>
        create event by api ga
      </div>
      <div className="high-light" style={style} onClick={createEventOnAndroidWithZaloMiniApp}>
        Tạo event trên android với web bình thường
      </div>
      <div className="high-light" style={style} onClick={createEventOnIosWithNormalWeb}>
        Tạo event trên ios với web bình thường
      </div>
     
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dasboard" element={<Dasboard />} />
      </Routes> */}
    </div>
  );
}

export default App;
const style = {
  cursor: "pointer",
  padding:"20px",
  width:"fit-content",
  margin:"0 auto"
};
