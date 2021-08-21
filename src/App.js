import "./index.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AllArticles from "./pages/AllArticles";
import UserLayout from "./pages/UserLayout";
import NewArticle from "./pages/NewArticle";
import EditArticle from "./pages/EditArticle";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <UserLayout exact path="/dashboard" component={Dashboard} />
        <UserLayout exact path="/all-articles" component={AllArticles} />
        <UserLayout exact path="/new-article" component={NewArticle} />
        <UserLayout exact path="/edit-article" component={EditArticle} />
      </Switch>
    </div>
  );
}

export default App;
