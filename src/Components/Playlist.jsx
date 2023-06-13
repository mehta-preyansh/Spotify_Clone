import React, { useEffect } from 'react'
import styled from 'styled-components'
import {RxDotFilled} from 'react-icons/rx'

function Playlist({name, images, owner}) {
  const Imageurl = images[0].url
  return (
    <li>
      <PlayList>
        <img src={Imageurl}/>
        <div className="data">
          <div className="name">{name}</div>
          <div className="creator">Playlist<RxDotFilled/>{owner.display_name}</div>
        </div>
      </PlayList>
    </li>
  )
}
const PlayList = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  margin: 0 6px;
  border-radius: 8px;
  &:hover{
    background-color: rgba(255,255,255,0.07);
    cursor: pointer;
  }
  img{
    width: 56px;
    height: 56px;
    border-radius: 4px;
  }
  .data{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 56px;
    width: calc(100% - 56px - 8px);
    .name{
      width: 100%;
      height: 50%;
      padding-top: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .creator{
      font-size: 14px;
      height: 50%;
      width: 100%;
      padding-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      svg{
        font-size:10px;
        margin: 0 2px;
      }
    }
  }
`
export default Playlist
