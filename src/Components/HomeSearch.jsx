import React from 'react'
import { HomeSearchContainer } from '../Styled Components/HomeSearch'
import { FaHome, FaSearch } from 'react-icons/fa';

function HomeSearch() {
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