import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import CategoryTemplate from "./pages/CategoryTemplate";
import DonationDetail from "./pages/DonationDetail";
import InventoryForm from "./pages/InventoryForm";
import DonationForm from "./pages/DonationForm";
import UpdateForm from "./pages/UpdateForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/user" exact Component={User}></Route>
          <Route path="/homepage" exact Component={Homepage}></Route>
          <Route path="/:categoryname" element={<CategoryTemplate />} />
          <Route path="/donationdetail/:itemId" element={<DonationDetail />} />
          <Route path="/profile" exact Component={Profile}></Route>
          <Route path="/form" element={<InventoryForm />}></Route>
          <Route
            path="/donationform/:itemId"
            element={<DonationForm />}
          ></Route>
          <Route path="/updateform/:itemId" element={<UpdateForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
