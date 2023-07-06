import React, {useEffect} from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Song from './Song'
import {v4 as uuidv4} from 'uuid'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'
uuidv4();

function SongList({color}) {

  const [{selectedPlaylistData}, dispatch]=useStateProvider();
  
  // Scroll event listner is added the first time this component renders
  const body = document.querySelector(".scrollBody")
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 7), 16);

  const handleScroll = ()=>{
    const title = document.querySelector(".column")
    const head = document.querySelector(".head_container")
    if(body.scrollTop>=280){
      title.style.backgroundColor="rgb(26, 26, 26)"
    }
    else{
      title.style.backgroundColor="transparent"
    }
    head.style.backgroundColor=`rgba(${red},${green},${blue},${body.scrollTop/280})`
  }

  //array of songs from the selected playlist so that we can use next and prev functionality in player
  const songs = selectedPlaylistData.tracks.items.filter((item)=>{
    return item.track!==null && item.track.name!==""
  })

  useEffect(()=>{
    body.addEventListener('scroll',handleScroll)
    body.scrollTop=0;
    body.style.backgroundColor=color
    const head = document.querySelector(".head_container")
    head.style.backgroundColor=`rgba(${red},${green},${blue},${body.scrollTop/280})`
    dispatch({type: reducerCases.SET_SELECTEDPLAYLISTSONGS, playlistSongs: songs})
    return ()=>{
      body.removeEventListener('scroll',handleScroll)
    }
  },[selectedPlaylistData])

  return (
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
          if (
              item===null || 
              item.track===null || 
              item.track.name===undefined || 
              item.track.album===null || 
              item.track.album.images.length === 0
            ){return null}
          else return(
            <Song key = {uuidv4()} item = {item} number={index+1}/>
          )
        })}
      </div>
    </>
  )
}

export default React.memo(SongList)