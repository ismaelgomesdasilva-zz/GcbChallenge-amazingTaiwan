import styled from "styled-components";
import mediaQuery from "../../utils/styles/mediaQuery";


export const Container = styled.div`
  display: flex;
 
  justify-content: center;

  h1 {
    width: 29.9375rem;
    height: 14.0625rem;
    font-weight: 700;
    font-size: 3.125rem;
    line-height: 4.6875rem;
    color: #ee6c4d;
  }
  p {
    width: 22.5rem;
    height: 5.625rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: #293241;
  }
  button {
    width: 10.25rem;
    height: 2.6875rem;
    box-shadow: 0px 6px 30px 3px rgba(252,106,77,0.5);
  }
  @media (max-width: ${mediaQuery.xl}) {
  
  p, h1, button{
    margin-left: 30px;
  }
  }
  @media (max-width: ${mediaQuery.lg}) {
   
    h1 {
      width: 28rem;
      height: 8rem;
      font-weight: 700;
      font-size: 3rem;
      line-height: 3rem;
    }
    p {
      width: 21rem;
      height: 4em;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      color: #293241;
    }
    >div{
        height: 80%;
    }
    .PrimaryImage{
        width: 400px
    }
  }
  @media(max-width:${mediaQuery.mdl}){
    
    .PrimaryImage{
        width: 300px
    }
    h1 {
      width: 20rem;
      height: 7rem;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
    }
    p {
      width: 20rem;
      height: 4em;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 0.75rem;
      color: #293241;
    
    }
    p, h1, button{
    margin-left: 0px;
  }
  }
  
  @media(max-width: ${mediaQuery.sml})
  {
    align-items: center;
    text-align: center;
    margin: 0;
    .PrimaryImage{
        display: none;
    }
    h1 {
      width: 26rem;
      height: 5rem;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 3rem;
      margin-bottom: 4rem;
    }
    p {
      width: 24rem;
      font-weight: 400;
      font-size:1rem;
      line-height: 1.5rem;
      color: #293241;
       margin-bottom: 1rem;
    }
    >div{
      display: flex;
      height: 350px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    @media (max-width: ${mediaQuery.sm}){
      h1 {
      width: 20rem;
      height: 3rem;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 4rem;
    }
    p {
      width: 18rem;
      font-weight: 400;
      font-size:0.8rem;
      line-height: 1rem;
      color: #293241;
       margin-bottom: 1rem;
    }
  }
  @media (max-width: ${mediaQuery.xs}){
    h1{
      width: 18rem;
    }
    p{
      width: 13rem;
      margin-bottom: 2rem;
    }
  }
  }
`;
export const BackgroundTop = styled.div`
  background-image: url("./waveTop.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0% 108%;
  height: 20vh;
  width: 100%;
  @media (max-width: ${mediaQuery.lg}) {

    height: 20vh;
  }
@media (max-width: ${mediaQuery.sm}) {

height:  10vh;
}
`;
