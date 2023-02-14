//import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
// import Filter from './components/filter/Filter';
import Filtered from "./components/filterpage/filtered";

import FilterPage2 from "./components/filterpage/FilterPage2";
import Home from "./pages/Home/Home";
import ProdoctTour from "./components/ProductTour/ProdoctTour";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Profile from "./pages/Profile/Profile";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProdoctTour />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/filterpage2" element={<FilterPage2 />} />
          <Route path="/filtered" element={<Filtered />} />

          <Route path="/item/" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
