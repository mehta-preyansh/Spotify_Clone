import styled from 'styled-components'
export const PlayListContainer = styled.div`
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