import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Customer from "./Components/Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company/:id">
            <Customer></Customer>
          </Route>
          <Route exact path="/customer/:id">
            <Customer></Customer>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
