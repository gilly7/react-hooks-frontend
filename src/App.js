import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee"
              component={AddEmployeeComponent}
            ></Route>
          </Routes>
          <ListEmployeeComponent />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
