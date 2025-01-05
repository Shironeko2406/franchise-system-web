import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Register from "./Guest/Page/Register/Register";
import TempUIUser from "./Guest/TempUIUser/TempUIUser";
import HomePage from "./Guest/Page/Home/HomePage";
import AgencyRegistration from "./Guest/Page/AgencyRegistration/AgencyRegistration";
import FranchiseReview from "./Guest/Page/FranchiseReview/FranchiseReview";
import Login from "./Guest/Page/Login/Login";
import PaymentSuccess from "./Guest/Page/PaymentSuccess/PaymentSuccess";
import SchedulePage from "./Guest/Component/SchedulePage/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
          <Route path="" element={<TempUIUser></TempUIUser>}>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="/for-franchise" element={<FranchiseReview />}></Route>
            {/* <Route path="profile" element={<Profile></Profile>}></Route> */}
            <Route path="register-agency" element={<AgencyRegistration />}></Route>
            <Route path="payment-success" element={<PaymentSuccess />} />
            <Route path="schedule" element={<SchedulePage />} />
          </Route>
          {/* <Route path="user/detail/:id" element={<TestPage/>} /> */}

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
