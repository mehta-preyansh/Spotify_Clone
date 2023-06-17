import styled from 'styled-components'
export const SongContainer = styled.div`
  padding: 6px 16px;
  /* border-bottom: 1px solid rgba(255,255,255,0.2); */
  border-radius: 4px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 16px auto 30% 25% 25% 16px;
  height: 56px;
  align-items: center;
  .play_song{
    height: 22px;
    background: none;
    border: none;
    position: relative;
    span{
      opacity: 1;
    }
    svg{
      font-size: 22px;
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      opacity: 0;
    }
  }
  .image{
    display: inline-block;
    width: 44px;
    height: 44px;
    background-size: cover;
    background-position: center;
  }
  .title{
    display: flex;
    flex-direction: column;
    .songName{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .artists{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .duration{
    font-size: 14px;
  }
  .album{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover{
    background-color: #ffffff32;
    .play_song{
      svg{
        opacity: 1;
        cursor: pointer;
      }
      span{
        opacity: 0;
      }
    }
  }
`