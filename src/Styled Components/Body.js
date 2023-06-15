import styled from 'styled-components'
export const BodyContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    &:hover{
      background-color: rgba(255,255,255,0.5) !important;
    }
  }
  &:hover::-webkit-scrollbar-thumb{
    background-color: rgba(255,255,255,0.3);
  }
  .body_heading{
    width: 100%;
    height: 30vh;
    max-height: 400px;
    min-height: 340px;
    padding: 64px 24px 24px 24px;
    display: flex;
    align-items: end;
    /* background-color: blue; */
    .curr_playlist_img{
      img{
        box-shadow: 0 4px 60px rgba(0,0,0,.5);
        border-radius: 4px;
        width: 232px;
        height: 232px;
      }
    }
    .curr_playlist_details{
      margin-left: 22px;
      width: calc(100% - 232px);
      color: white;
      max-height: 30vh;
      display: flex;
      flex-direction: column;
      div{
        display: flex;
        align-items: end;
      }
      flex: 1;
      *:not(svg){padding: 10px 2px;}
      span{
        text-transform: capitalize;
      }
      h1{
        display: block;
        width: 100%;
        font-size: clamp(32px, 54px,6rem);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .column{
      color: wheat;
      position: sticky;
      top: 56px;
      padding: 0 40px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      justify-content: space-between;
      display: grid;
      grid-template-columns: 16px 40% 25% 25% 16px;
      height: 56px;
      align-items: center;
      z-index: 1;
      div{
        height: inherit;
        line-height: 56px;
        position: relative;
        svg{
          margin-right: 12px;
          position: absolute;
          bottom: 50%;
          translate: 0 50%;
        }
      }

    }
  .song_list{
    padding: 0 24px;
    
  }
`