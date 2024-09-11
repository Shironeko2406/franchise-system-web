import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Login from "./Student/Page/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login></Login>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
