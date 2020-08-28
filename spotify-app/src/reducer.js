export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    current_playlist: null,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                current_playlist: action.current_playlist
            };
        default:
            return state;
    }
}

export default reducer;