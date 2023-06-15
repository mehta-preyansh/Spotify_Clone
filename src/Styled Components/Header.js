import styled from 'styled-components'

export const HeadContainer = styled.div`
  background-color: rgba(0,0,0,0);
  position: absolute;
  top: 0;
  padding: 12px 0 0 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  z-index: 1;
  .navigation{
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    >button{
      display: flex;
      padding: 4px;
      align-items: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background-color: rgba(0,0,0,0.4);
      border: none;
      svg{
        color: white;
        font-size: 22px;
        flex: 1;
      }
    }
  }
  .profile_section{
    width: 40vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
    >*{
      margin-right: 16px;
    }
    .upgrade{
      background-color: white;
      color: black;
      border-radius: 22px;
      padding: 4px 14px;
      border: none;
    }
    .install_app{
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      border-radius: 22px;
      padding: 4px 14px;
      border: none;
      display: flex;
      align-items: center;
      svg{
        margin-right: 8px;
      }
    }
    >svg{
      color: white;
      width: 32px;
      height: 32px;
      padding: 8px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 50%;
    }
  }
`