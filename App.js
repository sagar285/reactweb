import "./App.css";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 import Registration from "./Registration";
import About from "./About";
import Contact from "./Contact";
import Driver from "./Driver";
import Div1 from "./Div1"

function App() {
  return(
    <Router>
      <Routes>
    <Route path="/" element={<Registration/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/driver" element={<Driver/>} />
    <Route path="/div" element={<Div1 />} />
    </Routes>
  </Router>
  )
}

export default App;