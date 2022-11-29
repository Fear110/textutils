import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar about="About us" />
      <TextForm heading="Enter some text below to analyze" />
    </>
  );
}

export default App;
