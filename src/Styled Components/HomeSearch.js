import styled from 'styled-components'
export const HomeSearchContainer = styled.div`
  background-color: #121212;
  color: #b3b3b3;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  max-width: 40vw;
  max-height: 20vh;
  >div{
    /* background-color: blue; */
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    padding-left: 20px;
    cursor: pointer;
    >i{
      /* background-color: green; */
      svg{
        width: 24px;
        height: 24px;
      }
    }
    >span{
      font-weight: 700;
      display: block;
      margin-left: 20px;
      /* background-color: yellow; */
    }
    &:hover{
      color: #ffffff;
    }
    transition: all 0.2s ease;
  }
`