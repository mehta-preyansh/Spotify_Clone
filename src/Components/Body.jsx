import React, { useEffect } from 'react'
import axios from 'axios';
import { BodyContainer } from '../Styled Components/Body.js'
import { useStateProvider } from '../utils/StateProvider.jsx'
import { reducerCases } from '../utils/constants.js';
import { RxDotFilled } from 'react-icons/rx'
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Song from './Song'
import {v4 as uuidv4} from 'uuid'
uuidv4();

function Body() {
  const [{ token, selectedPlaylistId, selectedPlaylistData }, dispatch] = useStateProvider();
  useEffect(() => {
    const getSelectedPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId != "" ? selectedPlaylistId : "1t0xmzkwVddtmByWbCDVOu"}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      const playlist_data = response.data;
      dispatch({ type: reducerCases.SET_SELECTEDPLAYLISTDATA, playlistData: playlist_data })
      const body = document.querySelector(".scrollBody")
      body.addEventListener('scroll',()=>{
        const title = document.querySelector(".column")
        title.style.backgroundColor=`rgba(219,112,147,${body.scrollTop/280})`
        const head = document.querySelector(".head_container")
        head.style.backgroundColor=`rgba(219,112,147,${body.scrollTop/280})`

      })
    }
    getSelectedPlaylist();
  }, [token, dispatch, selectedPlaylistId])

  const data_markup = JSON.stringify(selectedPlaylistData) === "{}" ?
    null
    :
    <>
      <div className="body_heading">
        <div className="curr_playlist_img">
          <img src={selectedPlaylistData.images[0].url} ></img>
        </div>
        <div className="curr_playlist_details">
          <span>{(selectedPlaylistData.type)}</span>
          <h1>
            {selectedPlaylistData.name}
          </h1>
          <div>
            {selectedPlaylistData.owner.display_name}
            <RxDotFilled />
            {`${selectedPlaylistData.followers.total} likes `}
            <RxDotFilled />
            {`${selectedPlaylistData.tracks.total} songs, about ${
                Math.floor(selectedPlaylistData.tracks.items.map(item => {
                  if (item.track === null) return 0;
                  else return (item.track.duration_ms) / 3600000
                }).reduce((a, b) => a + b))
              }
              hrs`
            }
          </div>
        </div>
      </div>
      <div className="column">
            <div>
              <FaHashtag/>
            </div>
            <div>Title</div>
            <div>Album</div>
            <div>Date Added</div>
            <div>
              <AiOutlineClockCircle/>
            </div>
        </div>
      <div className="song_list">
        
        {selectedPlaylistData.tracks.items.map((item,index)=>{
          console.log(item)
          if (item===null || item.track===null || item.track.album.images.length === 0) return null
          else return(
            <Song
              key ={uuidv4()}
              id={item.track.id}
              number={index+1}
              date={item.added_at}
              imageUrl={item.track.album.images[0].url}
              time={item.track.duration_ms}
              name={item.track.name}
              albumName={item.track.album.name}
              artists={item.track.album.artists.map(artist=>artist.name)}
            />
          )
        })}
      </div>
    </>

  return (
    <BodyContainer className='scrollBody'>
      {data_markup}
    </BodyContainer>
  )
}

export default Body