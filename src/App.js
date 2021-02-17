import React, { useEffect } from "react";
import Login from "./pages/Login/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SpotifyWebApi from "spotify-web-api-js";

const Spotify = new SpotifyWebApi();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" exact render={() => <Login spotify={Spotify} />} />
        <Route path="/" exact />
        <Route path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
