import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
