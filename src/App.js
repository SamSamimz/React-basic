import logo from "./logo.svg";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
