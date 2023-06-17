import React from 'react'
import { useStateProvider } from '../utils/StateProvider';
import {BsFillPlayFill} from 'react-icons/bs'
import { reducerCases } from '../utils/constants';
import { SongContainer } from '../Styled Components/Song';

function Song({id, number, date, audioUrl, imageUrl, time, name, albumName, artists}) {

  const data = {id, number, date, audioUrl, imageUrl, time, name, albumName, artists}
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date(date)
  const year=d.getFullYear();
  const month = months[d.getMonth()]
  const day=d.getDate()

  const [{}, dispatch] = useStateProvider();

  const handleClick=()=>{
    dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: true})
    dispatch({type: reducerCases.SET_SELECTEDTRACK, trackData: data})
  }

  return (
    <SongContainer>
      <button className='play_song'>
        <span>{number}</span>
        <BsFillPlayFill onClick={handleClick}/>
      </button>
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className='title'>
        <div className="songName">
          {name}
        </div>
        <div className="artists">
          {
            artists.reduce((a,b) => {
              return `${a}, ${b}`
            })
          }
        </div>
      </div>
      <div className="album">
        {albumName}
      </div>
      <div className="date">
        {`${month} ${day}, ${year}`}
      </div>
      <div className="duration">
        {`${Math.floor(time/60000)}:${
          (Math.floor((time/1000)-Math.floor(time/60000)*60))<10?
          `0${Math.floor((time/1000)-Math.floor(time/60000)*60)}`
          :
          Math.floor((time/1000)-Math.floor(time/60000)*60)
        }`}
      </div>
    </SongContainer>
  )
}

export default React.memo(Song)