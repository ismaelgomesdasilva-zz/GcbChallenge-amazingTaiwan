import styled from "styled-components";

export const Container = styled.div`
background-color: 
#293241;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 40rem;
img{
    position: absolute;
}
`
export const Cards = styled.div`
width: 15.625rem;
height: 6.875rem;
background-color: #FFF;
border-radius: 1.25rem;
position: relative;
bottom: 6.25rem;
left: 0.9375rem;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 1rem;
gap: 0.3125rem;
h1{
font-style: normal;
font-weight: 700;
font-size: 1.5rem;
color: #293241;
margin: 0;
}
p{
    font-style: normal;
font-weight: 400;
font-size: 1.125rem;
margin: 0;
color: #293241;
}
svg{
    display: flex;
    flex-direction: columm;
}

`