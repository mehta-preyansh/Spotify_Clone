// *****************ICONS**********************/
import {RxDotFilled} from 'react-icons/rx'

// **************IMPORTANT IMPORTS*************
import React from 'react';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/constants';
import { PlayListContainer } from '../Styled Components/Playlist';

function Playlist({name, images, owner, id, onHomePage}) {
  //Accessing state of application
  const [{}, dispatch] = useStateProvider();
  const Imageurl = images[0].url

  // Setting the selected playlist id to be accessed in body component
  const handleClick = ()=>{
    dispatch({type:reducerCases.SET_SELECTEDPLAYLIST, playlistId:id})
  }
  return (
      <PlayListContainer onClick={handleClick} >
        <img src={Imageurl}/>
        <div className="data">
          <div className="name">{name}</div>
          {
            onHomePage ? null : <div className="creator">Playlist<RxDotFilled/>{owner.display_name}</div>
          }
        </div>
      </PlayListContainer>
  )
}

export default Playlist
