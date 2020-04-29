import React from 'react';
import styled from "@emotion/styled";
import rec from "./assets/rec.jpg";
import sub from "./assets/sub.png";
import sub1 from "./assets/sub1.png";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../layout/VisibilitySensor";

const Advert =() => {
   

  return (
    <>
       <div>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-20rem)"
                    }}
                  >
                    {props => 
                        <AdvertContainer style={{  ...props }}>
                            <TestimonySub>
                              <img src={sub} alt="sub" />
                            </TestimonySub>
                            <TestimonySub1>
                              <img src={sub1} alt="sub1" />
                            </TestimonySub1>
                            <div className="advert__image">
                              <figure>
                                  <img src={rec} alt="advert" />
                                </figure>
                            </div>

                            <div className="advert__content">
                              <h2> - We are becoming the best in short time</h2>
                              <p>
                                    We are giving the best courier 
                                    experience you wouldn’t get anywhere
                              </p>
                            </div>
                        </AdvertContainer>
                        }
                        </Spring>
                      )}
                    </VisibilitySensor>
                  </div>
                }
    </>
  );
}

export default Advert;


const AdvertContainer = styled.section`
    margin-top:10rem;
    display:flex;
    position:relative;

    @media screen and (max-width:50rem) {
       margin-top:7rem;
       flex-wrap:wrap;
     }

    div.advert__image {
      flex-basis:50%;

      @media screen and (max-width:50rem) {
       flex-basis:100%;
      }

      figure{
        width:100%;
        height:100%;

        img {
          width:100%;
          height:100%;
          object-fit:center;
        }
      }
    }

    div.advert__content {
      padding:5rem 10rem;

      @media screen and (max-width:50rem) {
        padding:5rem 6rem;
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

const TestimonySub = styled.section`
      width:15rem;
      height:15rem;
      position:absolute;
      z-index:-1;
      top:-7rem;
      left:-6rem;

      img {
        width:100%;
        height:100%;
        object-fit:center;
      }
`;

const TestimonySub1 = styled.section`
      width:10rem;
      height:10rem;
      position:absolute;
      z-index:5;
      bottom:2rem;
      right:2rem;

      img {
        width:100%;
        height:100%;
        object-fit:center;
      }
`;
