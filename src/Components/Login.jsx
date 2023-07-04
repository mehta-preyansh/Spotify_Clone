import React, { useState } from 'react'
import styled from 'styled-components'

export default function Login() {
  const [value, setVal ] = useState('');
  const handleChange = (e)=>{
    setVal(e.target.value);
  }
  const handleClick=(value)=>{
    const clientId = '8845d1e3ab8e4f5ebf89d05eab07f1bc'; 
    const redirectURL='http://localhost:3000/';
    const apiURL = 'https://accounts.spotify.com/authorize';
    const scope = ['user-read-email',
                  'user-read-private',
                  'user-read-playback-state',
                  'user-modify-playback-state',
                  'user-read-currently-playing',
                  'user-read-playback-position',
                  'user-top-read',
                  'user-read-recently-played']
    window.location.href=`${apiURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join(" ")}&response_type=token&show_dialogue=true`
  }
  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify" />
      <button onClick={()=>handleClick(value)} >Connect to spotify</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img{
    height: 20vh;
  }
  input{
    color: white;
    text-align: center;
    width: 25vw;
    padding: 12px 24px;
    border-radius: 24px;
    border: none;
    background-color: #000000b2;
    &:focus{
      outline: none;
    }
    &::placeholder{
      color: #7ad499;
    }
  }

  button{
    padding: 1rem 5rem;
    border-radius: 2rem;
    border: none;
    color: #49f585;
    background-color: black;
    font-size: 1.4 rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
`