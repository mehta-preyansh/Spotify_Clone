//**************ICONS***************
import { FaPlayCircle, FaVolumeUp, FaRegPauseCircle, FaVolumeOff, FaVolumeDown, FaVolumeMute} from 'react-icons/fa';
import { BiSkipNext, BiSkipPrevious} from 'react-icons/bi';
import { IoIosShuffle} from 'react-icons/io';
import { SlLoop} from 'react-icons/sl';
import { BsPip} from 'react-icons/bs';
import { TbMicrophone2} from 'react-icons/tb';
import { HiOutlineQueueList} from 'react-icons/hi2';
import { MdDevices} from 'react-icons/md';
import { GoHeart} from 'react-icons/go';

//*********IMPORTANT IMPORTS**************/
import React, { useEffect, useState } from 'react'
import {PlayerContainer} from '../Styled Components/Player'
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/constants';
import {v4 as uuidv4} from 'uuid'
uuidv4();


function Player() {
//Accessing State of the application
  const [{selectedTrack, playerState, selectedPlaylistSongs}, dispatch] = useStateProvider();

//Check for initial launch
  const flag = JSON.stringify(selectedTrack)==="{}"

//Appending audio tag at the end of body each time we change the track (also removing the previous one)
  useEffect(()=>{
    const music =  document.createElement("audio")
    music.classList.add("audio_file")
    music.setAttribute("src", flag?"":selectedTrack.track.preview_url)
    music.volume=document.querySelector(".volume_level").value/100
    document.body.removeChild(document.body.lastChild)
    document.body.appendChild(music)

  }, [selectedTrack])
  
//Controlling audio upon change in player state
  useEffect(()=>{
    const audioNode = document.querySelector(".audio_file");
    if(audioNode.getAttribute("src")!="null" && audioNode.getAttribute("src")!="undefined"){
      if(playerState){
        audioNode.play();
      }
      else{
        audioNode.pause();
      }
    }
  },[playerState, selectedTrack])

//Handlers to change the player state
  const currentSongIndex=selectedPlaylistSongs.indexOf(selectedTrack);
  const handlePlay = ()=>{
    dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: true})
  }
  const handlePause = ()=>{
    dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: false})
  }
  const handleNext = ()=>{
    if(currentSongIndex<selectedPlaylistSongs.length-1){
      const nextSong = selectedPlaylistSongs[currentSongIndex+1]
      dispatch({type: reducerCases.SET_SELECTEDTRACK, trackData: nextSong})
      dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: true})
    }
  }
  const handlePrev = ()=>{
    if(currentSongIndex>0){
      const prevSong = selectedPlaylistSongs[currentSongIndex-1]
      dispatch({type: reducerCases.SET_SELECTEDTRACK, trackData: prevSong})
      dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: true})
    }
  }

//Handling volume levels 
  const [volume, setVolume]=useState(0);
  const handleVolume = (e)=>{
    document.querySelector(".audio_file").volume=e.target.value/100
    setVolume(e.target.value)
  }
  let volumeIcon=<FaVolumeMute/>
  if(volume==0){
    volumeIcon=<FaVolumeMute/>
  }
  else if(volume>0 && volume<=25){
    volumeIcon=<FaVolumeOff/>
  }
  else if(volume>25 && volume<=60){
    volumeIcon=<FaVolumeDown/>
  }
  else{
    volumeIcon=<FaVolumeUp/>
  }
  return (
    <PlayerContainer>
      <div className='left__player'>
        <div className='thumbnail'>
          <img src={flag?null:selectedTrack.track.album.images[0].url} alt="" />
        </div>
        <div className='song_details'>
          <a>{flag?null:selectedTrack.track.name}</a>
          <div>
            {
              flag ? 
              null
              :
              selectedTrack.track.album.artists.map(artist=> <a key={uuidv4()}>{artist.name} </a>)
            }
          </div>
        </div>
        <div className='icons'>
          <GoHeart/>
          <BsPip/>
        </div>
      </div>
      <div className='mid__player'>
        <div className='controls'>
          <IoIosShuffle className='shuffle_btn'/>
          <BiSkipPrevious className='prev_btn' onClick={handlePrev}/>
          {
            (playerState===true)?<FaRegPauseCircle onClick={handlePause}></FaRegPauseCircle>
            :
            <FaPlayCircle className='play_btn' onClick={handlePlay}/>
          }
          <BiSkipNext className='next_btn' onClick={handleNext}/>
          <SlLoop className='loop_btn'/>
        </div>
        <div className='progress_bar'>
          <span>0:00</span>
          <input type="range" min={1} max={100} className='song_duration' />
          <span>5:12</span>
        </div>
      </div>
      <div className='right__player'>
        <div className="icons">
          <TbMicrophone2/>
          <HiOutlineQueueList/>
          <MdDevices/>
        </div>
        <div className="volume">
          {volumeIcon}
          <input type="range" value={volume} min={0} max={100} className='volume_level' onChange={handleVolume} />
        </div>
      </div>
    </PlayerContainer>
  )
}

export default Player