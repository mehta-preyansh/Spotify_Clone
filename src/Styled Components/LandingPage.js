import styled from 'styled-components'
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`