import React, { useEffect } from 'react'
import { LandingContainer } from '../Styled Components/LandingPage'
import { useStateProvider } from '../utils/StateProvider'
import Playlist from './Playlist';

function LandingPage() {

  const [{ playlists }, dispatch] = useStateProvider();

  const d = new Date();
  const t = d.getHours();
  let greetMessage = "Good Morning"
  if (t > 4 && t < 12) {
    greetMessage = "Good Morning"
  }
  else if (t >= 12 && t < 16) {
    greetMessage = "Good Afternoon"
  }
  else {
    greetMessage = "Good Evening"
  }

  useEffect(() => {

  }, [])

  return (
    <LandingContainer>
      <div className="welcome">
        <h2>
          {greetMessage}
        </h2>
        <div className="top_playlists">
          {
            playlists.filter((item, index) => index < 6).map(item => <Playlist
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images}
              owner={item.owner}
              onHomePage={true}
            ></Playlist>)
          }
        </div>
      </div>
      <div className="throwBack">
        
      </div>
    </LandingContainer>
  )
}

export default LandingPage