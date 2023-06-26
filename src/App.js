import "./App.css";
import NavBar from "./components/NavBar";
import Clothing from "./pages/Clothing";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={HomePage}></Route>
          <Route path="/clothing" exact Component={Clothing}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
