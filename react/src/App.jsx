import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Login from "./Student/Page/Login/Login";
import Register from "./Student/Page/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
