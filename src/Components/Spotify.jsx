import React from 'react'
import { MainContainer } from '../Styled Components/Spotify'
import HomeSearch from './HomeSearch'
import Player from './Player'
import Navbar from './Navbar'
import Main from './Main'

function Spotify() {
  return (
    <MainContainer>
      <HomeSearch/>
      <Navbar/>
      <Player/>
      <Main/>
    </MainContainer>
  )
}

export default Spotify