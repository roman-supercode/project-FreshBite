//import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
// import Filter from './components/filter/Filter';
import Filtered from './components/filterpage/filtered';

import FilterPage2 from './components/filterpage/FilterPage2';
import Home from "./pages/Home/Home";
import ProdoctTour from "./components/ProductTour/ProdoctTour";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<ProdoctTour />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/create" element={<Create />} />


          <Route path="/filterpage2" element={<FilterPage2 />} />
          <Route path="/filtered" element={<Filtered />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
