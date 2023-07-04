import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { BodyContainer } from '../Styled Components/Body.js'
import { useStateProvider } from '../utils/StateProvider.jsx'
import { reducerCases } from '../utils/constants.js';
import LandingPage from './LandingPage.jsx';
import SongList from './SongList.jsx';
import Footer from './Footer.jsx'

function Body() {
// Accessing state of application 
  const [{ token, selectedPlaylistId, selectedPlaylistData, homePage}, dispatch] = useStateProvider();


//Setting random color
const [randomColor, setRandomColor]=useState("")


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
          setRandomColor('#'+Math.floor(Math.random()*16777215).toString(16)+"99")
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
      {JSON.stringify(selectedPlaylistData) === '{}' || (homePage)?
        <LandingPage/>
        :
        <SongList color={randomColor}/>
      }
      <Footer/>
    </BodyContainer>
  )
}
  
export default React.memo(Body)