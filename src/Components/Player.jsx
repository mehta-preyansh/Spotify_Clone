import React, { useEffect } from 'react'
import axios from 'axios'
import {PlayerContainer} from '../Styled Components/Player'
import { FaPlayCircle, FaVolumeUp, FaVolumeOff, FaVolumeDown, FaVolumeMute} from 'react-icons/fa';
import { BiSkipNext, BiSkipPrevious} from 'react-icons/bi';
import { IoIosShuffle} from 'react-icons/io';
import { SlLoop} from 'react-icons/sl';
import { BsPip} from 'react-icons/bs';
import { TbMicrophone2} from 'react-icons/tb';
import { HiOutlineQueueList} from 'react-icons/hi2';
import { MdDevices} from 'react-icons/md';
import { GoHeart} from 'react-icons/go';
import { useStateProvider } from '../utils/StateProvider';
function Player() {
  const [{token, selectedTrack}, dispatch] = useStateProvider();
  useEffect(()=>{
    const getAudio = async ()=>{
      const response = await axios.get(`https://api.spotify.com/v1/tracks/${JSON.stringify(selectedTrack)==='{}' ? "11dFghVXANMlKmJXsNCbNl": selectedTrack.id}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      console.log(response)
    }
    getAudio();
  })
  return (
    <PlayerContainer>
      <div className='left__player'>
        <div className='thumbnail'>
          <img src={selectedTrack!==undefined?selectedTrack.imageUrl:null} alt="" />
        </div>
        <div className='song_details'>
          <a href="">{selectedTrack.name}</a>
          <div>
            {
              selectedTrack.artists!==undefined? 
              selectedTrack.artists.map((artist)=> <><a href="">{artist}</a> </> )
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
          <FaPlayCircle className='play_btn'/>
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