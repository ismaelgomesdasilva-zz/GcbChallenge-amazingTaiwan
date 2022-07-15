import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";
export const Container = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  padding-top: 9.5625rem;

  h3 {
    font-weight: 700;
    font-size: .9375rem;
    line-height: 1.6875rem;
    color: #ffffff;
    margin-bottom: 2.8125rem;
  }
  a {
    font-weight: 400;
    font-size: .8125rem;
    line-height: 2.4375rem;
    margin-bottom: .3125rem;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: ${mediaQuery.md}) {
    gap: 3.125rem;
    padding-top: 3rem;
    a {
      font-size: .9375rem;
    }
    h3 {
      font-size: 1.25rem;
      margin: 1.5625rem 0;
    }
  }
  @media (max-width: ${mediaQuery.mdl}) {
    padding-top: 7.3125rem;
  }
  @media (max-width: ${mediaQuery.sml}) {
    padding-top: 3.125rem;
  }
`;
export const ImagesFooter = styled.div`
  > div {
    margin-bottom: 6.25rem;
    width: 10rem;
  }
  @media (max-width: ${mediaQuery.md}) {
    > div {
      margin-bottom: 1.25rem;
    }
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 1.875rem;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;
export const TableOrganization = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackgroundWaves = styled.div`
  background-image: url("/waveBottomFooter.svg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const ContainerOrganization = styled.div`
  display: flex;
  background-color: #293241;
  width: 100%;
  gap: 8.125rem;
  padding: 0 6.25rem;

  padding-top: 1.875rem;
  @media (max-width: ${mediaQuery.xl}) {
    gap: 5rem;
  }
  @media (max-width: ${mediaQuery.lg}) {
    gap: 1.5625rem;
    padding: 0;
    
    justify-content: center;
  }
  @media (max-width: ${mediaQuery.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 0;
    padding-top: 3.125rem;
  }
`;
