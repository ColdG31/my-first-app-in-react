
import { BrowserRouter } from "react-router-dom";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
