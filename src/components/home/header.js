import React, {useState} from 'react';
import styled from "@emotion/styled";
import logo from "./assets/logo.png";
import { useSpring } from "react-spring";
import MenuRight from '../layout/menu';

const Header =() => {

  const [rightMenuVisible, setRightMenuVisible] = useState(false);

  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  });

  return (
    <HeaderNav>
          <nav className="main__nav">
                <figure>
                      <img src={logo} alt="Logo" /> 
                </figure>
                <button onClick={() => setRightMenuVisible(!rightMenuVisible)}>
                            <span  className={rightMenuVisible ? 'active' : ''}></span>
                            <span  className={rightMenuVisible ? 'active' : ''}></span>
                            <span  className={rightMenuVisible ? 'active' : ''}></span>
                </button>
            </nav>

            <MenuRight style={rightMenuAnimation} />
    </HeaderNav>
  );
}

export default Header;

const HeaderNav = styled.section`
  nav {
     display:flex;
     align-items:center;
     justify-content:space-between;

     figure {
      flex-basis: 10%;
      z-index: 9999999;

      @media screen and (max-width:37.5rem) {
        flex-basis:40%;
       }

      img {
        width: 100%;
        margin: 0;
      }
     }

     button {
      background-color: transparent;
      border: 0px;
      outline: 0px;
      width: 5rem;
      height: 5rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      z-index: 9999999;

      

      span {
        transition: all 0.3s;
        border-radius: 5px;
        height: .2rem;
        width: 3rem;
        background-color:var(--nav);
        margin-bottom: 0.5rem;
        cursor:pointer;

        &:nth-of-type(1) {
          width:1.4rem;

          &.active {
            width:2.4rem;
            transform:rotate(45deg);
            transform-origin:left top;
          }
        }

        &:nth-of-type(2) {
          width:2.4rem;

          &.active {
            opacity:0;
          }
        }

        &:nth-of-type(3) {
          width:1.4rem;

          &.active {
            width:2.4rem;
            transform:rotate(-45deg);
            transform-origin:left bottom;
          }
        }
      }
    }
  } 
`;