import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Company from "./pages/Company";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company/:id">
            <Company></Company>
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
