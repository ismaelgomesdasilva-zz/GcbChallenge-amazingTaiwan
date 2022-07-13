import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";

export const ModalComents = styled.div`
  width: 24rem;
  height: 13rem;
  background: #ffffff;
  box-shadow: 0rem 6.3125rem 18.875rem rgba(41, 50, 65, 0.08),
    0rem 2.6372rem 9.8316rem rgba(41, 50, 65, 0.0575083),
    0rem 1.41rem 6.7444rem rgba(41, 50, 65, 0.0476886),
    0rem 0.7904rem 4.8584rem rgba(41, 50, 65, 0.04),
    0rem 0.4198rem 3.2998rem rgba(41, 50, 65, 0.0323114),
    0rem 0.1747rem 1.7346rem rgba(41, 50, 65, 0.0224916);
  border-radius: 1.25rem;
  display: flex;
  padding-left: 1.5625rem;
  padding-top: 1.5625rem;
  justify-content: space-around;
  @media (max-width: ${mediaQuery.sm}) {
    width: 17rem;
    height: 12rem;
    padding-left: 1.25rem;
  }
`;

export const AlignContainer = styled.div`
  display: flex;

  justify-content: center;
  gap: 1.5625rem;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  margin-top: 12.5rem;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 3.375rem;
  text-align: center;

  color: #293241;
  @media (max-width: ${mediaQuery.mdl}) {
    margin-top: 21rem;
  }
`;
export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1,
  p,
  h3,
  img {
    margin: 0;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.375rem;

    color: #293241;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.9375rem;

    width: 16.25rem;

    color: #293241;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    margin-top: 0.875rem;

    color: #293241;
  }
  @media (max-width: ${mediaQuery.sm}) {
    width: 12.5rem;
    margin-left: 0.5rem;
    h1 {
      font-size: 1.1875rem;
    }
    p {
      font-size: 0.75rem;
      width: 12.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;
export const ImageAling = styled.div``;
