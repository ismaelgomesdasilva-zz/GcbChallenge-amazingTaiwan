import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";
export const Container = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  padding-top: 153px;

  h3 {
    font-weight: 700;
    font-size: 15px;
    line-height: 27px;
    color: #ffffff;
    margin-bottom: 45px;
  }
  a {
    font-weight: 400;
    font-size: 13px;
    line-height: 39px;
    margin-bottom: 5px;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: ${mediaQuery.md}) {
    gap: 50px;
    padding-top: 48px;
    a {
      font-size: 15px;
    }
    h3 {
      font-size: 20px;
      margin: 25px 0;
    }
  }
  @media (max-width: ${mediaQuery.mdl}) {
    padding-top: 117px;
  }
  @media (max-width: ${mediaQuery.sml}) {
    padding-top: 50px;
  }
`;
export const ImagesFooter = styled.div`
  > div {
    margin-bottom: 100px;
    width: 10rem;
  }
  @media (max-width: ${mediaQuery.md}) {
    > div {
      margin-bottom: 20px;
    }
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 30px;
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
  gap: 130px;
  padding: 0 100px;

  padding-top: 30px;
  @media (max-width: ${mediaQuery.xl}) {
    gap: 80px;
  }
  @media (max-width: ${mediaQuery.lg}) {
    gap: 25px;
    padding: 0;
    
    justify-content: center;
  }
  @media (max-width: ${mediaQuery.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 0;
    padding-top: 50px;
  }
`;
