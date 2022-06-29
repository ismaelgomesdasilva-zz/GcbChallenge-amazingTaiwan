import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 0.125rem solid rgba(0, 0, 0, 0.1);
height: 5.8rem;
nav{
    display: flex;
    align-items: center;
    margin-right: 10rem;
    gap: 3.7rem;   
}
a{
    font-weight: 500;
    width: 4rem;
    font-size: 1rem;
line-height: 1.5rem;
}
a:hover{
    font-weight: 600;
}
.logo{
    margin-left: 10rem;
}
`