// https://developer.spotify.com/documentation/web-api/quick-start/
//This might help you to understand what I have done here

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/";

const clientId = "cbb9d3995fd44366ba7801a16db5f36c";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const spotifyLoginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((inicial, item) => {
      let parts = item.split("=");
      inicial[parts[0]] = decodeURIComponent(parts[1]);
      return inicial;
    }, {});
};
