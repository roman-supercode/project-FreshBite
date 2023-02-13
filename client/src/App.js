import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Filter from './components/filter/Filter';
import Filtered from './components/filterpage/filtered';
import FilterPage from './components/filterpage/FilterPage';
import FilterPage2 from './components/filterpage/FilterPage2';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/create" element={<Create />} />
          <Route path="/filterpage" element={<FilterPage />} />
          <Route path="/filterpage2" element={<FilterPage2 />} />
          <Route path="/filtered" element={<Filtered />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
