import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Login from "./Student/Page/Login/Login";
import Register from "./Student/Page/Register/Register";
import TempUIUser from "./Student/TempUIUser/TempUIUser";
import HomePage from "./Student/Page/Home/HomePage";
import Profile from "./Student/Page/Profile/Profile";
import AgencyRegistration from "./Student/Page/AgencyRegistration/AgencyRegistration";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
          <Route path="home" element={<TempUIUser></TempUIUser>}>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="register-agency" element={<AgencyRegistration />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
