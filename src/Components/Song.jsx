import React from 'react'
import { useStateProvider } from '../utils/StateProvider';
import {BsFillPlayFill} from 'react-icons/bs'
import { reducerCases } from '../utils/constants';
import { SongContainer } from '../Styled Components/Song';

function Song({item, number}) {

  // const data = {id, number, date, audioUrl, imageUrl, time, name, albumName, artists}
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date(item.added_at)
  const year=d.getFullYear();
  const month = months[d.getMonth()]
  const day=d.getDate()

  const [{}, dispatch] = useStateProvider();

  const handleClick=()=>{
    dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: true})
    dispatch({type: reducerCases.SET_SELECTEDTRACK, trackData: item})
  }
  

  return (
    <SongContainer>
      <button className='play_song'>
        <span>{number}</span>
        <BsFillPlayFill onClick={handleClick}/>
      </button>
      <div className="image" style={{backgroundImage: `url(${item.track.album.images[0].url})`}}/>
      <div className='title'>
        <div className="songName">
          {item.track.name}
        </div>
        <div className="artists">
          {
            // item.track.album.artists.map(artist=>artist.name).reduce((a,b) => {
            //   return `${a}, ${b}`
            // })
            item.track.album.artists.map(artist=>artist.name).join(", ")
          }
        </div>
      </div>
      <div className="album">
        {item.track.album.name}
      </div>
      <div className="date">
        {`${month} ${day}, ${year}`}
      </div>
      <div className="duration">
        {`${Math.floor(item.track.duration_ms/60000)}:${
          (Math.floor((item.track.duration_ms/1000)-Math.floor(item.track.duration_ms/60000)*60))<10?
          `0${Math.floor((item.track.duration_ms/1000)-Math.floor(item.track.duration_ms/60000)*60)}`
          :
          Math.floor((item.track.duration_ms/1000)-Math.floor(item.track.duration_ms/60000)*60)
        }`}
      </div>
    </SongContainer>
  )
}

export default React.memo(Song)