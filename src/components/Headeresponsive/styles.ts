import styled from "styled-components";
import mediaQuery from "../../utils/mediaQuery";
export const Container = styled.header`
  display: none;

  @media (max-width: ${mediaQuery.md}) {
    display: block;
    user-select: none;
  }
  .icon {
    position: absolute;
    z-index: 999;
    right: 9%;
    height: 44px;
    cursor: pointer;
  }
  .hamburger {
    top: 100%;
    left: 10%;
    width: 2.3125rem;
    height: 0.375rem;
    background-color: #ee6c4d;
    position: absolute;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    user-select: none;
  }
  .hamburger:before {
    top: -0.75rem;
    content: "";
    width: 2.3125rem;
    height: 0.375rem;
    position: absolute;
    background: #ee6c4d;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    user-select: none;
  }

  .hamburger:after {
    top: 0.75rem;
    content: "";
    position: absolute;
    width: 2.3125rem;
    height: 0.375rem;
    background: #ee6c4d;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    user-select: none;
  }
  .list {
    display: flex;
    flex-direction: column;
    left: 1%;
    padding-top: 1.3rem;
    flex-wrap: nowrap;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    align-items: center;
  }
  .listItems {
    padding: 0;
    list-style: none;
    animation: opacity 0.3s alternate;
  }
  .listItems li {
    margin: 0.4rem 0.5rem;
    cursor: pointer;
    user-select: none;
   :hover{
    color:#415069;
    transition: all 0.3s ease-in-out }
  }
  .listItems li svg {
    margin: -0.1875rem 0.3125rem
  }
  .icon.iconActive .hamburger {
    background-color: transparent;
    box-shadow: 0 0.125rem 0.3125rem transparent;
    user-select: none;
    cursor: pointer;
  }
  .icon.iconActive .hamburger:after {
    top: 0;
    background-color: #fff;
    transform: rotate(225deg);
    box-shadow: 0 -0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
    user-select: none;
  }
  .icon.iconActive .hamburger:before {
    top: 0;
    background-color: #fff;
    transform: rotate(135deg);
    box-shadow: 0 -0.125rem 0.3125rem rgba(0, 0, 0, 0.2);
    user-select: none;
  }
  .menu.menuOpen {
    width: 12.5rem;
    position: absolute;
    right: 0;
    z-index: 2;
    padding: 0.3125rem 1.25rem;
    height: 50%;
    margin-top: 1.25rem;
    border-radius: 10%;
    background: #e96a4d;
    box-shadow: 0.625rem 0rem 4.3125rem 0rem rgba(0, 0, 0, 0.59);
    animation: go 0.5s alternate;
    opacity: 0.95;
  }
  .menu.menuClose {
    display: none;
    
  }
  @keyframes go {
    0% {
      width: 10rem;
      opacity: 0;
    }
    100% {
      width: 12.5rem;
      opacity: 1;
    }
  }
  @keyframes opacity {
    0% {
      
      opacity: 0;
    }
    100% {
      
      opacity: 1;
    }
  }
  @media (max-width: ${mediaQuery.md}) {
    display: block;
    .icon {
      right: 15%;
    }
  }
`;
