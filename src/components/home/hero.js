import React from 'react';
import styled from "@emotion/styled";
import dark from './assets/dark.png';
// import light from './assets/light.png';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../layout/VisibilitySensor";
import { useTheme } from "../../context/mainContext";


const Hero =() => {

  const mainState = useTheme();

  return (
    <>
            <div style={{
                overflow: 'hidden',
              }}
            >
              <VisibilitySensor  partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(200px)"
                    }}
                  >
                    {props => 
                        <HeroDiv style={{  ...props }}>
                            <h2>
                                Courier Service At It's Best
                            </h2>
                            <p>
                              - We offer a boundless
                                stream of network all around the globe
                            </p>
                            <HeroControl>
                              <div className="hero__control-circle"></div>
                              <div className="hero__control-circle"></div>
                              <div className="hero__control-circle"></div>
                            </HeroControl>
                            <HeroFooter>
                              <p>
                              All our clients are considered 
                              great and worthy of our praise 
                              </p>
                              <figure>
                                  <img src={dark} alt="footer" /> 
                              </figure>
                            </HeroFooter>
                        </HeroDiv>
                     }
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
      </>
  );
}

export default Hero;

const HeroDiv = styled.section`
     padding:12rem 0;

     h2 {
      font-family: 'Maven Pro', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 5rem;
      line-height: 6.5rem;
      color:var(--text-blue);
      width:40%;
      margin-bottom:2rem;

      @media screen and (max-width:62.5rem) {
          width:70%;
      }

      @media screen and (max-width:37.5rem) {
        width:90%
      }
     }

     p {
      font-family: var(--text-family);
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.8rem;
      color:var(--p-white);
      width:35%;

      @media screen and (max-width:62.5rem) {
        width:70%;
      }

      @media screen and (max-width:50rem) {
       width:90%;
      }
     }
`;

const HeroControl = styled.section`
    display:flex;
    align-items:center;
    width:40%;
    padding-top:2rem;
    padding-bottom:3rem;
    div {
      width:.8rem;
      height:.8rem;
      border-radius:50%;
      background-color:var(--carousel-btn);
      margin-right:1rem;

      &:nth-of-type(1) {
        background-color:#0071BC;
      }
    }
`;

const HeroFooter = styled.section`
     display:flex;
     justify-content:space-between;
     align-items:center;
     flex-wrap:wrap;

     @media screen and (max-width:50rem) {
      flex-direction:column;
      text-align:center;
     }

     p {
        font-family:  var(--text-family);
        font-style: normal;
        font-weight:400;
        font-size: 16px;
        line-height: 19px;
        color: var(--p-white);
        flex-basis:30%;

        @media screen and (max-width:50rem) {
          flex-basis:100%;
        }
     }

     figure {
        flex-basis:70%;

        @media screen and (max-width:50rem) {
          flex-basis:100%;
        }

        img {
          width:100%;
          height:100%;
          object-fit:center;
        }
     }
`;
