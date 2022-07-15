import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";

export const Container = styled.div`
background-color: 
#293241;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 40rem;

.alice-carousel__dots{
    margin: 0%;
}
.alice-carousel__dots-item {
    width: .9375rem;
    height: .9375rem;
    background: #FFFFFF;
    opacity: 0.4;

}
.alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
    background-color: green;
    width: 1.0625rem;
height: 1.0625rem;
background: #FFFFFF;
opacity: 1;

}
 .alice-carousel__dots{
   position: absolute;
   left: 0;
   right: 0;
   bottom: 1.375rem;
}
.alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
    font-size: 2.1875rem;
    color:#FFFFFF ;
    padding: 0rem 7.5rem;
}

img{
    position: absolute;
}
@media (max-width:508px){
    margin: 0 auto;
    padding: 5.625rem 0;
    .alice-carousel__dots{
   position: static;
   
}
.alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
    font-size: 2.1875rem;
    color:#FFFFFF ;
    padding: 0;
    display: none;
}
}
`

export const ButtonAligin = styled.div`
background-color: #293241;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 10rem;
@media (max-width: ${mediaQuery.fullHD}){
height: 4rem;
}
@media (max-width: ${mediaQuery.lg}){
height: 4rem;
}
button{
    width: 10.25rem;
height: 2.6875rem;

box-shadow: 0px 6px 30px 3px rgba(252,106,77,0.5);
    
}
`