import "./index.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AllArticles from "./pages/AllArticles";
import UserLayout from "./pages/UserLayout";
import NewArticle from "./pages/NewArticle";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <UserLayout exact path="/all-articles" component={AllArticles} />
        <UserLayout exact path="/new-article" component={NewArticle} />
      </Switch>
    </div>
  );
}

export default App;
