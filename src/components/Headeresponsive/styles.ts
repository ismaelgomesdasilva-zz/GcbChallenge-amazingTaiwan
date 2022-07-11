import styled, { css } from "styled-components";
import mediaQuery from "../../utils/mediaQuery";
export const Container = styled.header`
display: none;
@media (max-width: ${mediaQuery.md}){
    display: block;
}
.icon{
    position: absolute;
    z-index: 999;
    right: 9%;
    width: fit-content;
    height: 44px;
    cursor: pointer;

}
.hamburger{
    top: 100%;
    left: 10%;
    width: 37px;
    height: 6px;
    background-color: #ff3300;
    position: absolute;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: 0.5s;
   
   
}
.hamburger:before{
        top: -12px;
        content: "";
        width: 37px;
        height: 6px;
        position: absolute;
        background: #ff3300;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: 0.5s;
    }

    .hamburger:after{
       
        top: 12px;
        content: "";
        position: absolute;
        width: 37px;
        height: 6px;
        background: #ff3300;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: 0.5s;
    
    }
    .list{
        display: flex;
        flex-direction:column;
        left: 1%;
        padding: 45px 0 0 ;
        flex-wrap: nowrap;
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .listItems{
        padding: 0;
        list-style: none
    }
    .listItems li{
     margin: 2px 8px;
     cursor: pointer;
    }
    .icon.iconActive .hamburger{
        background-color: transparent;
        box-shadow: 0 2px 5px transparent;
    }
    .icon.iconActive .hamburger:after{
        top: 0;
        background-color: #fff;
        transform: rotate(225deg);
        box-shadow: 0 -2 5px rgba(0,0,0,0.2);
    }
    .icon.iconActive .hamburger:before{
        top: 0;
        background-color: #fff;
        transform: rotate(135deg);
        box-shadow: 0 -2 5px rgba(0,0,0,0.2);
    }
    .menu.menuOpen {
        width: 200px;
        position: absolute;
        right: 0;
        z-index: 2;
  
        height: 100vh;
        background: #000;
        box-shadow: 10px 0px 69px 0px rgba(0,0,0,0.59);
        animation: go 0.3s alternate;
    }
    .menu.menuClose{
        display: none;
        width: 0px;
      
    }
    @keyframes go {
    0% {
        width: 0;
    }
    100% {
        width: 200px;
    }
    
}
@media (max-width: ${mediaQuery.md}){
    display: block;
}
`


