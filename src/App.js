import React, { useEffect } from "react";
import Login from "./pages/Login/index";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" exact render={() => <Login spotify={spotify} />} />
        <Route path="/Home" exact render={() => <Home spotify={spotify} />} />
        <Redirect from="/" to="/Login" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
