import styled from 'styled-components'
export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/span all;
  grid-row: 4;
  color: white;
  .mid__player{
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .controls{
      margin-bottom: 10px;
      width:60% ;
      display: flex;
      align-items: center;
      justify-content: space-around;
      >*{
        margin: 8px 0px;
        &:not(:is(.play_btn)){
          color: rgba(255, 255, 255, 0.7);
          width: 24px;
        }
        &:not(:is(.loop_btn)){
          font-size: 36px;
          width: initial;
        }
        &:is(.shuffle_btn){
          font-size: 24px;
        }
        &:hover{
          color: white;
        }
      }
      .play_btn{
        transition: all 0.1s ease;
        &:hover{
          scale: 1.05;
        }
      }
    }
    .progress_bar{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      >*{
        margin: 0 4px;
      }
      >span{
        font-size: 11px;
      }
      .song_duration{
        -webkit-appearance: none;
        appearance: none;
        width: 80%;
        height: 4px;
        border-radius: 2px;
        outline: none;
        background-color: rgba(255, 255, 255, 0.3);
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #49f585;
          transition: all 0.2s;
          cursor: pointer;
          &:hover{
            background: #1db954;
          }
        }
      }
    }
  }
  .right__player{
    width: 30%;
    display: flex;
    justify-content: flex-end;
    svg{
      font-size: 36px;
      padding: 8px;
      color: rgba(255, 255, 255, 0.7);
      &:hover{
        color: white;
      }
    }
    .icons, .volume{
      display: flex;
      align-items: center;
      >.volume_level{
        -webkit-appearance: none;
        appearance: none;
        width: 94px;
        height: 4px;
        border-radius: 2px;
        outline: none;
        background-color: rgba(255, 255, 255, 0.3);
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #49f585;
          transition: all 0.2s;
          cursor: pointer;
        }
      }
    }
  }
  .left__player{
    width: 30%;
    display: flex;
    padding: 0 0 0 1rem;
    align-items: stretch;
    height: 56px;
    .song_details{
      min-width: 40%;
      max-width: 60%;
      margin-left: 16px;
      align-self: center;
      >a, >div{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      a{
        color: #b3b3b3;
        font-size: 11px;
        text-decoration: none;
        cursor: pointer;
        &:hover{
          color: white;
          text-decoration: underline;
        }
      }
      >a:first-child{
        color: white;
        display: block;
        font-size: 14px;
      }
    }
    .thumbnail, .icons{
      img{
        border-radius: 4px;
      }
      display:flex ;
      justify-content: space-around;
      width: 56px;
      svg{
        padding-left: 4px;
        height: 32px;
        align-self: center;
      }
    }
  }
`