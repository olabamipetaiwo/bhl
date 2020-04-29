import React from 'react';
import styled from "@emotion/styled";
import {ThemeProvider} from 'emotion-theming';
import { useTheme } from "../../../context/mainContext";


const Test =() => { 

    const mainState = useTheme();

    
    const Button = styled.button`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
        color: ${props => props.theme.main};
        border: 2px solid ${props => props.theme.main};
    `;

    const theme = {
       main:mainState.col
    };

  return (
    <>
        <h2>Test</h2>
        <div>
            <Button>Normal</Button>

            <ThemeProvider theme={theme}>
                 <Button>Themed</Button>
            </ThemeProvider>
        </div>
    </>
  );
}

export default Test;



