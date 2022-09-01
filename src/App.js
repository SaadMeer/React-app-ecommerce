import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />}></Route>
          <Route path="/product/:id" element={<Productdescscreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
