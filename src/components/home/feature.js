import React from 'react';
import styled from "@emotion/styled";
import plane from "./assets/plane.jpg";
import container from "./assets/container.jpg";
import blc from "./assets/blc.png";
import blr from "./assets/blr.png";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../layout/VisibilitySensor";

const Feature = () => {

  return (
       <>
           <div>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.9)"
                      // transform: isVisible ? "translateY(0)" : "translateY(200px)"
                    }}
                  >
                    {props =>  
                        <FeatureSection style={{  ...props }}>
                          <FigBlc>
                            <img src={blc} alt="blc" />
                          </FigBlc>
                          <FigBlr>
                            <img src={blr} alt="blr" />
                          </FigBlr>
                          <figure className="features__image-1">
                            <img src={plane} alt="plane" />
                          </figure>
                          <figure className="features__image-2">
                              <img src={container} alt="container" />
                          </figure>
                          <div className="features__content-left">
                              <h2> - We’ve got that shipment contained</h2>
                              <p>
                                Size or quantity doesn’t matter,
                                we’ve got it contained. With our 
                                large size compact containers 
                                we’ve got that ton saved.
                              </p>
                          </div>
                          <div className="features__content-right">
                            <h2> - We deliever all around the world </h2>
                            <p> 
                              All round the clock delivery is
                              what our clients need to be able to take
                                on the world, we are not shy to give them 
                              this experience 
                            </p>
                          </div>
                     </FeatureSection> 
                      }
                  </Spring>
                )}
              </VisibilitySensor>
            </div>}
       </> 
  );
}

export default Feature;

const FeatureSection = styled.section`
  height:120vh;
  display:grid;
  grid-template-rows:repeat(8,1fr);
  grid-template-columns:repeat(8,1fr);
  position:relative;

  @media screen and (max-width:50rem) {
    grid-template-rows:repeat(6,1fr);
    height:auto;
  }

  figure.features__image-1 {
     grid-row:1/6;
     grid-column:1/5;
     z-index:1;

     @media screen and (max-width:50rem) {
      grid-row:1/3;
      grid-column:1/-1;
     }

     img {
        width:100%;
        height:100%;
        object-fit:center;
     }
  }

  figure.features__image-2 {
     grid-row:5/9;
     grid-column:4/9;
     z-index:2;

     @media screen and (max-width:50rem) {
       grid-row:4/6;
       grid-column:1/-1;
     }

     img {
        width:100%;
        height:100%;
        object-fit:center;
     }
  }

  div.features__content-right {
     grid-row:2/4;
     grid-column:6/8;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;

     @media screen and (max-width:50rem) {
        grid-row:3/4;
        grid-column:1/-1;
     }

     h2 {
      font-family: var(--text-family);
      font-style: normal;
      font-size: 3rem;
      line-height: 3.5rem;
      color: var(--feature-heading);
     }

     p {
      font-family: var(--text-family);
      font-style: normal;
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 2rem;
      color:var(--feature-p);
     }
  }

  div.features__content-left {
    grid-row:6/9;
    grid-column:1/4;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:5rem;

    @media screen and (max-width:50rem) {
      grid-row:6/7;
      grid-column:1/-1;
     }

    h2 {
      font-family: var(--text-family);
      font-style: normal;
      font-size: 3rem;
      line-height: 3.5rem;
      color: var(--feature-heading);
    }

    p {
      font-family: var(--text-family);
      font-style: normal;
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 2rem;
      color:var(--feature-p);
    }
 }
`;

const FigBlc = styled.section`
  width:15rem;
  height:15rem;
  position:absolute;
  z-index:5;
  top:-7rem;
  left:-6rem;

  img {
    width:100%;
    height:100%;
    object-fit:center;
  }
`;

const FigBlr = styled.section`
  width:15rem;
  height:15rem;
  position:absolute;
  z-index:5;
  bottom:-7rem;
  right:55%;

  @media screen and (max-width:50rem) {
    right:10%;
    display:none;
  }

  img {
    width:100%;
    height:100%;
    object-fit:center;
  }
`;