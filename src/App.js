import React, { useEffect } from "react";
import Login from "./pages/Login/index";
import { getTokenFromUrl } from "./pages/Login/utills";

function App() {
  useEffect(() => {
    const hash = getTokenFromUrl();
    const token = hash.access_token;
    window.location.hash = "";
    console.log("I have the token !!", hash);
  }, []);

  return <Login />;
}

export default App;
