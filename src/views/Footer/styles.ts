import styled from "styled-components";
export const Container = styled.div`
display: flex;
gap: 100px;
width: 100%;


padding-top: 160px;


h3{
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 27px;

color: #FFFFFF;
margin-bottom: 45px;
}
a{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 39px;
margin-bottom: 5px;
color: #FFFFFF;
cursor: pointer;
}
`
export const ImagesFooter = styled.div`

>div{
    margin-bottom: 116px;
}
`
export const Social = styled.div`
display: flex;
gap: 30px;
justify-content: center;
img{
    cursor: pointer;
}
`
export const TableOrganization = styled.div`


    display: flex;
flex-direction: column;

`

export const BackgroundWaves = styled.div`
background-image: url('/waveBottomFooter.svg');

background-repeat: no-repeat;

position: absolute;
left: 0;
right: 0;
background-position: top;
`

export const ContainerOrganization = styled.div`

display: flex;
background-color: #293241;
width: 100%;
gap: 130px;
padding: 0 100px;
`