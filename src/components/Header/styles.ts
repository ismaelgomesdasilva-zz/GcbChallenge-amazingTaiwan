import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";
export const Container = styled.header`
  display: flex;
  align-items: center;
  margin: auto;
  gap: 600px;
  max-width: 1330px;
  height: 5.8rem;
  
  nav {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    gap: 3.7rem;
  }
  a {
    font-weight: 500;
    width: 4rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  a:hover {
    font-weight: 600;
  }
  .logo {
    margin-left: 2rem;
  }
  @media (max-width: ${mediaQuery.xl}) {
    gap: 0;
    justify-content: space-between;
  }
  @media (max-width: ${mediaQuery.md}){
    nav{
      display: none;
    }
  }
`;
export const Border = styled.div`
  border-bottom: 0.125rem solid rgba(0, 0, 0, 0.1);
`;
