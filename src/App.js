import "./index.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
