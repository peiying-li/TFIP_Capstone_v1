import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import CategoryTemplate from "./pages/CategoryTemplate";
import DonationDetail from "./pages/DonationDetail";
import NavBar from "./components/NavBar";
import InventoryForm from "./pages/InventoryForm";
import DonationForm from "./pages/DonationForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/homepage" exact Component={Homepage}></Route>
          <Route path="/:categoryname" element={<CategoryTemplate />} />
          <Route path="/donationdetail/:itemId" element={<DonationDetail />} />
          <Route path="/profile" exact Component={Profile}></Route>
          <Route path="/form" element={<InventoryForm />}></Route>
          <Route
            path="/donationform/:itemId"
            element={<DonationForm />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
