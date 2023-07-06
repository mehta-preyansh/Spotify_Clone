import React, { useEffect, useState } from 'react'
import { LandingContainer } from '../Styled Components/LandingPage'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios';
import Playlist from './Playlist';
import Card from './Card';

function LandingPage() {
  const [{ token, playlists}, dispatch] = useStateProvider();
  const [featured, setFeatured] = useState([])
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
    const getThrowbackAlbums = async ()=>{
      await axios.get(`https://api.spotify.com/v1/browse/featured-playlists`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          },
        })
        .then((response)=>{
          setFeatured(response.data.playlists.items)
        })
    }
    getThrowbackAlbums();
  },[])

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
              onHomePage={true}/>)
          }
        </div>
      </div>
      <div className='featured' >
        <h2>Featured Playlists</h2>
        <div className='featured_playlists'>
          {
            featured.map((item)=> <Card
            key={item.id}
            id={item.id}
            name={item.name}
            images={item.images}
            description={item.description}/>)
          }
        </div>
      </div>
    </LandingContainer>
  )
}

export default LandingPage