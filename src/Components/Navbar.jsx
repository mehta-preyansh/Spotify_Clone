import React from 'react'
import { NavbarContainer } from '../Styled Components/Navbar'
function Navbar() {
  return (
    <NavbarContainer>
      <div className='playlist__operations'>Library</div>
      <div className='playlists'>Playlists</div>
    </NavbarContainer>
  )
}

export default Navbar