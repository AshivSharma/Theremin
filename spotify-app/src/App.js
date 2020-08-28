import React, {Component,useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromURL } from './spotify';
import User from './User';
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();



function App() {

  const [{user, playlists, current_playlist, token}, dispatch] = useDataLayerValue();
 
  useEffect(() => {
    
    if(token) {
      
      spotify.setAccessToken(token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
    }
    spotify.getPlaylist('6v03Dr7D4svLvCDdFEOonL').then(res => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: res,
      });
    });
    
  }, [token, dispatch]);

  console.log(current_playlist);
  console.log('User: ', user);
  console.log('Token', token);


  return (
    <div className="App">
     {token ? < User />: <Login />}
    </div>
  );
}

export default App;
