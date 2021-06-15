import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import routes from "../App-route";
// component
import Layout from "../layout";
import NotFound from "../components/auth/NotFound";

const RouterLayer = () => {
    return (
        <Router>
            <Switch>
                {routes &&
                    routes
                        .filter((r) => r.public)
                        .map((route) => (
                            <Route exact key={route.key} path={route.path}>
                                <Layout {...route} />
                            </Route>
                        ))}
                <Route>
                    {/* 若沒有對應的路徑, 則 return NotFound */}
                    <Layout component={NotFound} />
                </Route>
            </Switch>
        </Router>
    );
};

export default RouterLayer;
