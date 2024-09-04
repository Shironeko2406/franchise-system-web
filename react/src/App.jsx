import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Logout from "./Component/Logout";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="login" element={<Logout></Logout>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
