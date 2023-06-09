import styled from 'styled-components'
export const FootContainer = styled.div`
  width: 100%;
  height: fit-content;
  color: rgb(179, 179, 179);
  box-sizing: border-box;
  /* border-radius: 0 0 10px 10px; */
  background-color: rgb(18, 18, 18);
  padding: 8px 32px 40px;
  /* position: absolute;
  bottom: 0; */
  .Footer__top{
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    .links{
      display: flex;
      flex-wrap: wrap;
      flex: 1 1 50%;
      ul{
        padding: 0 48px;
        li{
          list-style: none;
          padding: 6px 0;
          &:first-child{
            color: rgb(255, 255, 255);
            font-weight: 700;
            cursor: text;
          }
          a{
            cursor: pointer;
            color: rgb(167, 167, 167);
            text-decoration: none;
            &:hover{
              color: rgb(255, 255, 255);
              text-decoration: underline;
            }
          }
        }
      }
      
    }
    .social{
      margin-top: 32px;
      a{
        margin: 0 16px 0 0;
        display: inline-block;
        width: 40px;
        height: 40px;
        color: white;
        background-color: #292929;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        cursor: default;
        &:hover{
          background-color: rgb(114, 114, 114);
        }
      }
    }
  }
  hr{
    border: 1px solid #292929;
    margin: 10px 0;
    border-color: rgba(255, 255, 255, 0.1);
  }
  .Footer__bottom{
    
    padding: 32px 13px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    a{
      display: inline-block;
      font-size: 14px;
      margin-right: 16px;
      cursor: pointer;
      color: rgb(167, 167, 167);
      text-decoration: none;
      &:hover{
        color: rgb(255, 255, 255);
      }
    }
  }
`