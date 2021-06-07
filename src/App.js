import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import routes from "./config/route";
import { PrivateRoute } from "./Components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <div>
                    <Switch>
                        {routes.map(
                            (route) =>
                                route.private ? (
                                    <PrivateRoute {...route} />
                                ) : (
                                    <Route {...route} />
                                )
                            // console.log(route)
                        )}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
