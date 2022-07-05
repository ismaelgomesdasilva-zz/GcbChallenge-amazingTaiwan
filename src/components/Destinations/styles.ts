import styled from "styled-components";

export const Container = styled.div`
background-color: 
#293241;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 48.4375rem;
img{
    position: absolute;
}
`
export const Cards = styled.div`
width: 250px;
height: 133px;
background-color: #FFF;
border-radius: 20px;
position: relative;
bottom: 100px;
left: 30px;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 1rem;
gap: 5px;
h1{
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #293241;
margin: 0;
}
p{
    font-style: normal;
font-weight: 400;
font-size: 18px;
margin: 0;
color: #293241;
}
svg{
    display: flex;
    flex-direction: columm;
}

`