import React, { useEffect } from "react";
import Login from "./pages/Login/index";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SpotifyWebApi from "spotify-web-api-js";

const Spotify = new SpotifyWebApi();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" exact render={() => <Login spotify={Spotify} />} />
        <Route path="/Home" exact component={Home} />
        <Redirect from="/" to="/Login" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
