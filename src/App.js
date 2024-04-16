// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/noteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* <Home /> */}
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            {/* <Route exact path="/users">
            <Users />
          </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
