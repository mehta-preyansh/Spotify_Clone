import { styled } from 'styled-components'

export const CardContainer = styled.div`
  cursor: pointer;
  width: 180px;
  display: flex;
  flex-direction: column;
  background: #181818;
  height: 270px;
  padding: 10px;
  border-radius: 6px;
  transition: all 0.3s ease;
  .img{
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    width: 160px;
    height: 160px;
    >img{
      width:100%;
    }
    .play_icon{
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #1ed760;
      position: absolute;
      bottom: -48px;
      right: 8px;
      transition: all 0.4s ease;
    }
  }
  .name{
    color: #fff;
    font-weight: bold;
    width: 100%;
    flex: 1;
    padding-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .description{
    color: #6a6a6a;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &:hover{
    background-color: rgb(40, 40, 40);
    .play_icon{
      opacity: 1;
      translate: 0 -56px;
    }
  }
`
