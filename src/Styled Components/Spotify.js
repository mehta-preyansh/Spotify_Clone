import styled from 'styled-components'
export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  grid-template-columns : 22vw 78vw;
  grid-template-rows : 7.7vh 7.7vh 69vh 15.4vh;
  background-color: black;
  >div{
    margin: 4px;
  }
`