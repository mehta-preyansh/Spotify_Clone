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
import React, { useEffect } from 'react'
import {PlayerContainer} from '../Styled Components/Player'
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/constants';
import {v4 as uuidv4} from 'uuid'
uuidv4();


function Player() {
//Accessing State of the application
  const [{selectedTrack, playerState}, dispatch] = useStateProvider();

//Appending audio tag at the end of body each time we change the track (also removing the previous one)
  useEffect(()=>{
    const music =  document.createElement("audio")
    music.classList.add("audio_file")
    music.setAttribute("src", selectedTrack.audioUrl)
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
  const handlePlay = ()=>{
    dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: true})
  }
  const handlePause = ()=>{
    dispatch({type: reducerCases.SET_PLAYERSTATE, playerState: false})
  }

  return (
    <PlayerContainer>
      <div className='left__player'>
        <div className='thumbnail'>
          <img src={selectedTrack!==undefined?selectedTrack.imageUrl:null} alt="" />
        </div>
        <div className='song_details'>
          <a>{selectedTrack.name}</a>
          <div>
            {
              selectedTrack.artists!==undefined? 
              selectedTrack.artists.map((artist)=> <a key={uuidv4()}>{artist}</a>)
              : 
              null
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
          <BiSkipPrevious className='prev_btn'/>
          {
            (playerState===true)?<FaRegPauseCircle onClick={handlePause}></FaRegPauseCircle>
            :
            <FaPlayCircle className='play_btn' onClick={handlePlay}/>
          }
          <BiSkipNext className='next_btn'/>
          <SlLoop className='loop_btn'/>
        </div>
        <div className='progress_bar'>
          <span>0:00</span>
          <input type="range" min={1} max={100} className='song_duration'/>
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
          <FaVolumeUp/>
          <input type="range" min={0} max={100} className='volume_level'/>
        </div>
      </div>
    </PlayerContainer>
  )
}

export default Player