import React, {useReducer} from 'react';
import ThemeContext from './themeContext';
import ThemeReducer from './themeReducer';

import {
    CHANGE_THEME
} from  '../types';

const ThemeState = (props) => {

    const defaultMode = localStorage.mode  ? localStorage.getItem('mode') : 'dark';
    const initialState = {
      mode:'dark',
      heroImg: defaultMode === 'dark' ? './assets/dark.png' :  './assets/light.png'
    };

    const [state,dispatch] = useReducer(ThemeReducer,initialState);
    
    
    const changeTheme= () => {
        dispatch({
            type: CHANGE_THEME
        });
    }
   
    return (
        <ThemeContext.Provider
            value = {{
                mode:state.mode,
                heroImg:state.heroImg,
                changeTheme
            }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;