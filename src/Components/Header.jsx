import React from 'react'
import { HeadContainer } from '../Styled Components/Header'
import {IoIosArrowBack, IoIosArrowForward, IoMdDownload} from 'react-icons/io'
import {BsFillPersonFill} from 'react-icons/bs'
function Header() {
  
  return (
      <HeadContainer className='head_container'>
        <div className='navigation'>
          <button className='back'><IoIosArrowBack/></button>
          <button className='forward'><IoIosArrowForward/></button>
        </div>
        <div className='profile_section'>
          <button className='upgrade'>
            Upgrade
          </button>
          <button className='install_app'>
            <IoMdDownload/>
            Install App
          </button>
          <BsFillPersonFill/>
        </div>
      </HeadContainer>
  )
}

export default Header