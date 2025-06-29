import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import ShareProfile from "./pages/shareProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/shareProfile" element={<ShareProfile />} />
      </Routes>
    </Router>
  );
}
export default App;
