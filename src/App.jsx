import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import SearchPage from "./pages/Search/SearchPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import CheckoutPage from "./pages/Checkout/CheckoutPage.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
