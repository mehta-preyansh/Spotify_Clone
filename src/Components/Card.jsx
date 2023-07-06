import React from 'react'
import { CardContainer } from '../Styled Components/Card'
import {FaPlay, FaPause} from 'react-icons/fa'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants';

function Card(props) {

  const [{selectedPlaylistId}, dispatch] = useStateProvider();

  const handleClick=()=>{
    dispatch({type: reducerCases.SET_SELECTEDPLAYLIST, playlistId: props.id})
    console.log(props.id)
  }

  return (
    <CardContainer onClick={handleClick} >
      <div className="img">
        <img src={props.images[0].url} alt="image"/>
        <div className="play_icon">
          <FaPlay/>
        </div>
      </div>
      <div className="name">
        {
          props.name
        }
      </div>
      <div className="description">
        {
          props.description
        }
      </div>
    </CardContainer>
  )
}

export default Card