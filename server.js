const express = require("express"),
  app = express(),
  port = process.env.PORT || 4000,
  cors = require("cors");
const fetch = require("node-fetch");
var SpotifyWebApi = require('spotify-web-api-node');
scopes = ['user-read-private', 'user-read-email','playlist-modify-public','playlist-modify-private', 'user-top-read']
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", `http://localhost:3000`); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(port, () => console.log("Backend server live on " + port));

// const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectURI = "http://localhost:4000/callback";
// const clientID = "5929f650239a4dc2895bc444f1e4f741";
var spotifyApi = new SpotifyWebApi({
  clientId: "5929f650239a4dc2895bc444f1e4f741",
  clientSecret: "1b1335aa1c08423dad779232f48a9e28",
  redirectUri: "http://localhost:4000/callback",
});
var access_token = null;
var refresh_token = null;

app.get('/login', (req,res) => {
  const URL = spotifyApi.createAuthorizeURL(scopes);
  //const URL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
  //console.log('URL', URL);
  res.send(URL+"&show_dialog=true");  
})

app.get('/callback', async (req,res) => {
  const { code } = req.query;
  //console.log('code', code);
  try {
    var data = await spotifyApi.authorizationCodeGrant(code)
    access_token = data.body;
    refresh_token = data.body;
    spotifyApi.setAccessToken(access_token);
    //console.log(spotifyApi);
    res.redirect(`http://localhost:3000/`);
  } catch(err) {
    res.redirect('/#/error/invalid token');
  }
});
app.get('/getToken', async (req,res) => {
    const accessToken = await access_token;
    //console.log('Token', accessToken);
    if(accessToken){
      console.log(accessToken.access_token);
      res.json({Token: accessToken.access_token});
    }

});

// app.get('/getUserInfo', async (req,res) => {
//   try {
//     var result = await spotifyApi.getMe()
//     .then(function(data) {
//       console.log('Some information about the authenticated user', data.body);
//     }, function(err) {
//       console.log('Something went wrong!', err);
//     });
  
//     //res.status(200).send(result.body)
//   } catch (err) {
//     res.status(400).send(err)
//   }
// });

