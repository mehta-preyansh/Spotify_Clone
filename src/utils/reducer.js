import { reducerCases } from "./constants";

export const initialState = {
  token: null,
  playlists:[],
  selectedPlaylistId: '',
  selectedPlaylistData: {},
  selectedPlaylistSongs: [],
  selectedTrack:{},
  playerState:false,
  homePage:true
};

const reducer = (state, action)=>{
  switch(action.type){
    case reducerCases.SET_TOKEN : {
      return {...state, token: action.token}  
    }
    case reducerCases.SET_PLAYLISTS : {
      return {...state, playlists: action.playlist}
    }
    case reducerCases.SET_SELECTEDPLAYLIST: {
      return {...state, selectedPlaylistId: action.playlistId}
    }
    case reducerCases.SET_SELECTEDPLAYLISTDATA:{
      return {...state, selectedPlaylistData: action.playlistData}
    }
    case reducerCases.SET_SELECTEDTRACK: {
      return {...state, selectedTrack: action.trackData}
    }
    case reducerCases.SET_PLAYERSTATE: {
      return {...state, playerState: action.playerState}
    }
    case reducerCases.SET_HOME: {
      return {...state, homePage: action.setHome}
    }
    case reducerCases.SET_SELECTEDPLAYLISTSONGS: {
      return {...state, selectedPlaylistSongs: action.playlistSongs}
    }
    default: return state;
  }
}

export default reducer;