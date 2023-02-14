import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Create from "./components/Create";
import { NavBar } from "./components/NavBar/NavBar";
// import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
