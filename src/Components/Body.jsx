import React, {useEffect} from 'react'
import axios from 'axios';
import { BodyContainer } from '../Styled Components/Body.js'
import { useStateProvider } from '../utils/StateProvider.jsx'
import { reducerCases } from '../utils/constants.js';
import LandingPage from './LandingPage.jsx';
import SongList from './SongList.jsx';


function Body() {
// Accessing state of application 
  const [{ token, selectedPlaylistId, selectedPlaylistData}, dispatch] = useStateProvider();

// Scroll event listner is added the first time this component renders
  useEffect(()=>{
    const body = document.querySelector(".scrollBody")
      body.addEventListener('scroll',()=>{
        const title = document.querySelector(".column")
        title.style.backgroundColor=`rgba(219,112,147,${body.scrollTop/280})`
        const head = document.querySelector(".head_container")
        head.style.backgroundColor=`rgba(219,112,147,${body.scrollTop/280})`
      })
  },[])

// Setting the playlist data using its id we got from Playlist component
  useEffect(() => {
    const getSelectedPlaylist = async () => {
      if(selectedPlaylistId!=""){
        await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
        })
        .then((response)=>{
          dispatch({ type: reducerCases.SET_SELECTEDPLAYLISTDATA, playlistData: response.data })
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    }
    getSelectedPlaylist();
    
  }, [token, dispatch, selectedPlaylistId])

  
  return (
    <BodyContainer className='scrollBody'>
      {JSON.stringify(selectedPlaylistData) === '{}' ?
        <LandingPage/>
        :
        <SongList selectedPlaylistData={selectedPlaylistData}/>
      }
    </BodyContainer>
  )
}
  
export default React.memo(Body)