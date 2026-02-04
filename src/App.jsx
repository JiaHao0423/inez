import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import SearchPage from "./pages/Search/SearchPage.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
