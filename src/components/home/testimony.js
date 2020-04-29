import React from 'react';
import styled from "@emotion/styled";
import t1 from "./assets/1.jpg";
import t2 from "./assets/2.jpg";
import t3 from "./assets/3.jpg";
import t4 from "./assets/4.jpg";
import coffe from "./assets/coffe.png";
import gillete from "./assets/gillete.png";
import nin from "./assets/nin.png";
import lo from "./assets/lo.png";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../layout/VisibilitySensor";


const Testimony = () => {

  return (
   <>
      <div>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1) translateY(0)" : "scale(0.1) translateY(200px)"
                    }}
                  >
                    {props => 
                        <TestimonyContainer  style={{  ...props }}>
                            <h2>- You love us for a reason</h2>
                            <p>Our partners have been our image... They speak for us </p>
                            <TestimonyBox>
                                <div className="testimony__box">
                                <img src={t1} alt="t1" />
                                </div>
                                <div className="testimony__box">
                                  <div className="testimony__box-header">
                                      <figure>
                                          <img src={coffe} alt="coffe" />
                                      </figure>
                                      <h2>
                                        Starbucks
                                      </h2>
                                  </div>
                                  <h2>
                                    Officia excepteur mollit elit 
                                    est in qui quis fugiat tempor. 
                                    Incididunt fugiat dolor est
                                    ex est voluptate
                                  </h2>
                                  <p>Victoria Wilson</p>
                                </div>
                                <div className="testimony__box">
                                    <img src={t2} alt="t1" />
                                </div>
                                <div className="testimony__box">
                                    <div className="testimony__box-header">
                                          <figure>
                                              <img src={gillete} alt="gillete" />
                                          </figure>
                                          <h2>
                                            Gillete
                                          </h2>
                                      </div>
                                      <h2>
                                        Officia excepteur mollit elit 
                                        est in qui quis fugiat tempor. 
                                        Incididunt fugiat dolor est
                                        ex est voluptate
                                      </h2>
                                      <p>John Madeira</p>
                                    </div>
                                <div className="testimony__box">
                                  <div className="testimony__box-header">
                                        <figure>
                                            <img src={lo} alt="lo" />
                                        </figure>
                                        <h2>
                                          Lo'real
                                        </h2>
                                    </div>
                                    <h2>
                                      Officia excepteur mollit elit 
                                      est in qui quis fugiat tempor. 
                                      Incididunt fugiat dolor est
                                      ex est voluptate
                                    </h2>
                                    <p>Herpes Wilson</p>
                                  </div>
                                <div className="testimony__box">
                                    <img src={t3} alt="t1" />
                                </div>
                                <div className="testimony__box">
                                    <div className="testimony__box-header">
                                          <figure>
                                              <img src={nin} alt="nin" />
                                          </figure>
                                          <h2>
                                          Nintendo
                                          </h2>
                                      </div>
                                      <h2>
                                        Officia excepteur mollit elit 
                                        est in qui quis fugiat tempor. 
                                        Incididunt fugiat dolor est
                                        ex est voluptate
                                      </h2>
                                      <p>Theresa May</p>
                                    </div>
                                <div className="testimony__box">
                                      <img src={t4} alt="t4" />
                                </div>
                            </TestimonyBox>
                        </TestimonyContainer>
                        }
                        </Spring>
                      )}
                    </VisibilitySensor>
                  </div>
      }
   </>
  );
}

export default Testimony;



const TestimonyContainer = styled.section`
  margin-top:15rem;
  margin-bottom:10rem;

  @media screen and (max-width:50rem) {
     margin-top:3rem;
   }

  h2 {
    font-family: var(--text-family);
    font-style: normal;
    font-weight:500;
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
`;

const TestimonyBox = styled.section`
    margin-top:5rem;
    display:flex;
    flex-wrap:wrap;

    div.testimony__box {
      flex-basis:25%;
      background-color:var(--testimony-bg);
      display:flex;
      flex-direction:column;
      justify-content:space-between;

      @media screen and (max-width:50rem) {
         flex-basis:100%;
       }

      img {
        width:100%;
        height:100%;
        object-fit:center;
      }

      div.testimony__box-header {
        display:flex;
        color:var(--testimony-heading);
        align-items:center;
        padding:2rem;

        figure {
          width:3rem;
          height:3rem;

          img {
            width:100%;
            height:100%;
            object-fit:center;
          }
        }

        h2 {
          font-family:var(--text-family);
          font-style: normal;
          font-weight: 500;
          font-size: 1.8rem;
          line-height: 2rem;
          color:  var(--testimony-heading);
        }
      }

      h2 {
        font-family: var(--text-family);
        font-style: normal;
        font-weight: normal;
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: var(--testimony-p);
        padding-left:2rem;
        padding-right:2rem;
      }

      p {
        font-family: var(--text-family);
        font-style: normal;
        font-weight: normal;
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: var(--testimony-footer);
        color: var(--testimony-p);
        margin-top:auto;
        padding:2rem;
      }
    }
`;