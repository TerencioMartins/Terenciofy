import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/login/login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/player/player";
import { useProviderValue } from "./contexts/provider";
import ParticleBackground from "./particlesBackground";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('5eDufIy8WtiArgp9aPd9su').then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }
  }, []);

  return <div className="app">
    {/* <ParticleBackground/> */}
    {token?
    <Player spotify={spotify} />:
    <Login />}</div>
}

export default App;
