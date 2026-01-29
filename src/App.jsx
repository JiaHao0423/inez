import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Search from "./pages/Search/Search.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
