import styled from "styled-components";

export const ModalComents = styled.div`
width: 24rem;
height: 13rem;

background: #FFFFFF;
box-shadow: 0px 101px 302px rgba(41, 50, 65, 0.08), 0px 42.1954px 157.306px rgba(41, 50, 65, 0.0575083), 0px 22.5597px 107.91px rgba(41, 50, 65, 0.0476886), 0px 12.6468px 77.7341px rgba(41, 50, 65, 0.04), 0px 6.7166px 52.7962px rgba(41, 50, 65, 0.0323114), 0px 2.79493px 27.7529px rgba(41, 50, 65, 0.0224916);
border-radius: 1.25rem;
display: flex;
padding-left: 25px;
padding-top: 25px;
justify-content: space-around;
`

export const AlignContainer = styled.div`
display: flex;

justify-content: center;
gap: 25px;

`
export const Title = styled.h1`
margin: 100px auto;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        text-align: center;
        
        color: #293241;
        `
   
export const Descriptions = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

h1, p, h3, img{
    margin: 0;
}

h1{

    font-style: normal;
font-weight: 700;
font-size: 22px;


color: #293241;
}
p{
    font-style: normal;
font-weight: 400;
font-size: 15px;

width: 260px;

color: #293241;
}
h3{
    font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
margin-top: 14px;


color: #293241;
}
`
export const ImageAling = styled.div`


`