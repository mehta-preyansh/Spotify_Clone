import React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Song from './Song'
import {v4 as uuidv4} from 'uuid'
uuidv4();

function SongList({selectedPlaylistData}) {
  return (
    <>
      <div className="body_heading">
        <div className="curr_playlist_img">
          <img src={selectedPlaylistData.images[0].url} ></img>
        </div>
        <div className="curr_playlist_details">
          <span>{(selectedPlaylistData.type)}</span>
          <h1>
            {selectedPlaylistData.name}
          </h1>
          <div>
            {selectedPlaylistData.owner.display_name}
            <RxDotFilled />
            {`${selectedPlaylistData.followers.total} likes `}
            <RxDotFilled />
            {`${selectedPlaylistData.tracks.total} songs, about ${
                Math.floor(selectedPlaylistData.tracks.items.map(item => {
                  if (item.track === null) return 0;
                  else return (item.track.duration_ms) / 3600000
                }).reduce((a, b) => a + b))
              }
              hrs`
            }
          </div>
        </div>
      </div>
      <div className="column">
            <div>
              <FaHashtag/>
            </div>
            <div>Title</div>
            <div>Album</div>
            <div>Date Added</div>
            <div>
              <AiOutlineClockCircle/>
            </div>
        </div>
      <div className="song_list">
        {selectedPlaylistData.tracks.items.map((item,index)=>{
          if (item===null || item.track===null || item.track.album.images.length === 0) return null
          else return(
            <Song
              key ={uuidv4()}
              id={item.track.id}
              number={index+1}
              date={item.added_at}
              audioUrl={item.track.preview_url}
              imageUrl={item.track.album.images[0].url}
              time={item.track.duration_ms}
              name={item.track.name}
              albumName={item.track.album.name}
              artists={item.track.album.artists.map(artist=>artist.name)}
            />
          )
        })}
      </div>
    </>
  )
}

export default React.memo(SongList)