// *********ICONS**********
import { FaHome, FaSearch } from 'react-icons/fa';

// ***********IMPORTANT IMPORTS************
import React, { useEffect } from 'react'
import { HomeSearchContainer } from '../Styled Components/HomeSearch'
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/constants';

function HomeSearch() {
  const [{}, dispatch] = useStateProvider();
  useEffect(()=>{
    document.querySelector(".home").addEventListener("click", ()=>{
      dispatch({type:reducerCases.SET_HOME, setHome:true})
      dispatch({type:reducerCases.SET_SELECTEDPLAYLIST, playlistId:''})
    })
  },[])

  return (
    <HomeSearchContainer>
      <div className='home'>
        <i>
          <FaHome/>
        </i>
        <span>Home</span>
      </div>
      <div className='search'>
        <i>
          <FaSearch/>
        </i>
        <span>Search</span>
      </div>
    </HomeSearchContainer>
  )
}

export default HomeSearch;