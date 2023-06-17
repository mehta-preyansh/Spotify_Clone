// ********************ICONS************************
import { RiStackFill } from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiArrowRight} from 'react-icons/fi'

// ********************IMPORTANT IMPORTS**********************
import React, {useEffect} from 'react'
import axios from 'axios'
import Playlist from './Playlist'
import {useStateProvider} from '../utils/StateProvider'
import { NavbarContainer } from '../Styled Components/Navbar'
import { reducerCases } from '../utils/constants'

function Navbar() {
// Accessing the state of the application
  const [ {token, playlists} , dispatch] = useStateProvider();

//Get current user's playlists everytime the component re-renders
  useEffect(()=>{
    const getPlaylistData = async ()=>{
      const response = await axios.get(`https://api.spotify.com/v1/me/playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      const {items}=response.data;
      const playlists = items.map(({name, id, images, owner})=>{
          return {name, id, images, owner}
        }
      )
      dispatch({type:reducerCases.SET_PLAYLISTS, playlist:playlists})
    }
    getPlaylistData();
  },[token, dispatch])

  return (
    <NavbarContainer>
      <div className='playlist__operations'>
        <div className="library">
          <button className="compress_nav">
            <RiStackFill/>
            Your Library
          </button>
          <button className="add_playlist">
            <AiOutlinePlus/>
          </button>
          <button className="expand_nav">
            <FiArrowRight/>
          </button>
        </div>
        <div className="filter_btns">
          <button>Playlists</button>
          <button>Artists</button>
          <button>Albums</button>
        </div>
      </div>
      <div className='playlists'>
        {/* To be added later */}
        {/* <div className="search">
          <FiSearch/>
          <select name="sorts" id="">
            <option value="Recents">Recents</option>
            <option value="Recently Added">Recently Added</option>
            <option value="Alphabetical">Alphabetical</option>
            <option value="Creator">Creator</option>
          </select>
        </div> */}
        <div className="playlists_data">
          <ul>
            {
              playlists.map(item => <Playlist
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  images={item.images}
                  owner={item.owner}
                 ></Playlist>)
            }
          </ul>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar