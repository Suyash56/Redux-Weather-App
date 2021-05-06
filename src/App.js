import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/app" component={Main}></Route>
      </Switch>
    </>
  );
}

export default App;
