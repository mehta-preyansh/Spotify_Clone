import styled from 'styled-components'
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 8px;
  padding-inline: 16px;
  min-height: 100%;
  padding-top: 56px;
  .welcome{
    padding-top: 8px;
    h2{
      font-size: 32px;
      color: white;
      margin-bottom: 16px;
    }
    .top_playlists{
      font-weight: bold;
      display: grid;
      gap: 16px 24px;
      grid-template: auto/repeat(auto-fill,minmax(max(270px,25%),1fr));
      >div{
        background-color: #ffffff1a;
        transition: background-color .3s ease;
        &:hover{
          background-color: #ffffff33;
        }
      }
    }
  }
  .featured{
    h2{
      color: #ffffff;
      font-size: 24px;
    }
    .featured_playlists{
      padding: 24px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 24px 0;
      width: 100%;
    }
    /* background-color: grey; */
  }
`