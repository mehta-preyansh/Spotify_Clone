import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider';
import {BsFillPlayFill} from 'react-icons/bs'
import { reducerCases } from '../utils/constants';

function Song({id, number, date, imageUrl, time, name, albumName, artists}) {
  const data = {id, number, date, imageUrl, time, name, albumName, artists}
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date(date)
  const year=d.getFullYear();
  const month = months[d.getMonth()]
  const day=d.getDate()

  const [{}, dispatch] = useStateProvider();

  const handleClick = ()=>{
    dispatch({type: reducerCases.SET_SELECTEDTRACK, trackData: data})
  }

  return (
    <SongContainer>
      <button className='play_song'>
        <span>{number}</span>
        <BsFillPlayFill onClick={handleClick} />
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


const SongContainer = styled.div`
  padding: 6px 16px;
  /* border-bottom: 1px solid rgba(255,255,255,0.2); */
  border-radius: 4px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 16px auto 30% 25% 25% 16px;
  height: 56px;
  align-items: center;
  .play_song{
    height: 22px;
    background: none;
    border: none;
    position: relative;
    span{
      opacity: 1;
    }
    svg{
      font-size: 22px;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      opacity: 0;
    }
  }
  .image{
    display: inline-block;
    width: 44px;
    height: 44px;
    background-size: cover;
    background-position: center;
  }
  .title{
    display: flex;
    flex-direction: column;
    .songName{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .artists{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .duration{
    font-size: 14px;
  }
  .album{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover{
    background-color: #ffffff32;
    .play_song{
      svg{
        opacity: 1;
        cursor: pointer;
      }
      span{
        opacity: 0;
      }
    }
  }
`
export default Song