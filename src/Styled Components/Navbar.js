import styled from 'styled-components'
export const NavbarContainer = styled.div`
  background-color: #121212;
  color: #b3b3b3;
  border-radius: 10px;
  grid-row: 3;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  button{
    color: #b3b3b3;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .playlist__operations{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column ;
    .library{
      height: 50%;
      padding: 8px 16px;
      display: flex;
      gap: 8px;
      align-items: center;
      .compress_nav{
        transition: all 0.2s ease;
        svg{
          margin-right: 10px;
        }
        &:hover{
          color: #fff;
        }
        padding: 4px 8px;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 1em;
      }
      .add_playlist, .expand_nav{
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 5px;
        &:is(.add_playlist){
          margin-left: auto;
        }
        cursor: default;
        &:hover{
          color: #fff;
          background-color: #2a2a2a;
        }
        svg{
          font-size: 22px;
          cursor: pointer;
          transition: all 0.1s ease;
          border-radius: 50%;
        }
      }
    }
    .filter_btns{
      height: 50%;
      display: flex;
      margin-left: 14px;
      padding: 8px 0;
      >button{
        margin-right: 8px;
        padding: 4px 12px;
        height: 32px;
        border-radius: 32px;
        background-color: #FFFFFF12;
        color: white;
        font-weight: 400;
        font-size: 0.875rem;
        transition: all 0.2s ease-in-out;
        &:hover{
          background-color: rgba(255,255,255,0.1);
        }
      }
    }
  }
  .playlists{
    width: 100%;
    height: 70%;
    display: flex;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 15px;
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
    .playlists_data{
      width: 100%;
      ul{
        list-style-type: none;
      }
    }
  }
`