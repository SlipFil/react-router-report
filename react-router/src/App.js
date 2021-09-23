import "./App.css";
import { Route, Switch } from "react-router-dom";
import News from "./Components/News";
import Home from "./Components/Home";
import Music from "./Components/Music";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
      </Switch>
    </div>
  );
}

export default App;
