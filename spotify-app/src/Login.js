import React from 'react'
import '../src/Login.css'
import axios from 'axios';
import {useDataLayerValue} from "./DataLayer";


  async function getAuthURL(){
    const loginURL = axios.get(`http://localhost:4000/login`).then(function(res){
        return res.data;});
    return await Promise.resolve(loginURL);
  }
  async function getToken(){
    const token = axios.get(`http://localhost:4000/getToken`).then(function(res){
        return res.data.Token;});
    return await Promise.resolve(token);
  }

function Login() {
    
    const [url, setURL] = React.useState(null);
    const [{token}, dispatch] = useDataLayerValue();
    React.useEffect(() => {
        getAuthURL().then(setURL);
    }, [])

    getToken().then(_token =>{
        dispatch({
            type: "SET_TOKEN",
            token: _token,
            });
    });

    return (
        <div className = 'login'>
            <img src = 'https://brandslogo.net/wp-content/uploads/2017/01/spotify-logo.png' /> 
            <a href={url}>Login to Spotify Account</a>
        </div>
    )
}

export default Login
