
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clientID = "5929f650239a4dc2895bc444f1e4f741";

const scopes = [
    "user-read-currently-playing",
    "user-top-read"
];
var player = '';
export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;