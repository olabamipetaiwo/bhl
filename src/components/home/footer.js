import React from 'react';
import styled from "@emotion/styled";

const Footer =() => {

  return (
    <>
      <FooterMain>
        <h2> - Take An Action </h2>
        <p>We are available to respond to you in a bolt</p>

        <div className="links">
            <div className="links__section">
              <a href="a.com"> - Send us a message</a>
              <a href="a.com"> - Give us a call</a>
              <a href="a.com"> - Send us an Email</a>
            </div>
            <div className="links__section">
              <a href="a.com"> - Track your package here</a>
            </div>
        </div>
      </FooterMain>
    </>
  );
}

export default Footer;

const FooterMain = styled.section`
   
 margin-top:10rem;
 margin-bottom:5rem;

  h2 {
        font-family: var(--text-family);
        font-style: normal;
        font-size: 3rem;
        line-height: 3.5rem;
        color: var(--feature-heading);
        padding-bottom:1.5rem;
  }

  p {
    font-family: var(--text-family);
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2rem;
    color:var(--feature-p);
  }

  div.links {
    display:flex;
    margin-top:5rem;

    div.links__section {
      flex-basis:50%;
      display:flex;
      flex-direction:column;

      a {
        margin-bottom:1rem;
        color:var(--feature-p);
      }
    }
  }
`;