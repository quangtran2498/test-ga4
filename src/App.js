import "./App.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-VZ6T7SQ29E");
ReactGA.send("pageview");
const OnGa = () => {
  ReactGA.event({
    category: "your category",
    action: "your action",
    label: "your label", // optional
    value: 99, // optional, must be a number
    nonInteraction: true, // optional, true/false
    transport: "xhr", // optional
    quangtest: "1234", //! ko nhận
    dimension: "quang test",
  });
  ReactGA.gtag("event", "quang test", {
    event_action: "quang test gtag",
    abc: "abc",
  });
};
function App() {
  return (
    <div className="App">
      <div onClick={OnGa}>quang test ga4 </div>
    </div>
  );
}

export default App;
