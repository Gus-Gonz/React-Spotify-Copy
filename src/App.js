import React, { useEffect } from "react";
import Login from "./pages/Login/index";
import { getTokenFromUrl } from "./pages/Login/utills";

import SpotifyWebApi from "spotify-web-api-js";

const Spotify = new SpotifyWebApi();

function App() {
  return <Login spotify={Spotify} />;
}

export default App;
