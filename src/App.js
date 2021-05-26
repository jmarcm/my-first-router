import "./App.css";
import Nav from "./Nav";

import Shop from "./Shop/Shop";
import About from "./About";

import Item from "./Item/Item";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/about" component={About} />
                    <Route path="/shop/:itemId" component={Item} />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
        </div>
    );
}

export default App;
