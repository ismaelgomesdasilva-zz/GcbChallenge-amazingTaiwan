import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";

export const BackgroundBottom = styled.section`
  background-image: url("/waveBottom.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0% 100%;
  height: 20vh;
  width: 100%;
  @media (max-width: 896px) {
    background-position: 0% -1%;
  }
`;
export const AlingItens = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  @media (max-width: ${mediaQuery.xl}) {
  }
`;

export const Description = styled.div`
  width: 39.25rem;
  height: 6.75rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin: 2.5rem 0;

  color: #000000;
  span {
    color: #ee6c4d;
    font-weight: 700;
  }
  p {
    margin: 0 0.625rem;
    margin-bottom: 1.6875rem;
  }
  @media (max-width: ${mediaQuery.xl}) {
    width: 30rem;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2rem;
    margin: 2rem 2.5rem;
  }
  @media (max-width: ${mediaQuery.lg}) {
    width: 23rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  @media (max-width: ${mediaQuery.mdl}) {
    width: 40rem;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.5rem;

    text-align: center;
  }
  @media (max-width: ${mediaQuery.xs}) {
    width: 90%;
    margin: 0;
    font-size: 1rem;
    line-height: 1.2rem;

    text-align: center;
  }
`;

export const ImageLogo = styled.div`
  @media (max-width: ${mediaQuery.xl}) {
    width: 25rem;
  }
  @media (max-width: ${mediaQuery.lg}) {
    width: 18.75rem;
  }
  @media (max-width: ${mediaQuery.mdl}) {
    display: none;
  }
`;

export const Titleh1 = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;

  text-align: center;

  color: #293241;
`;
