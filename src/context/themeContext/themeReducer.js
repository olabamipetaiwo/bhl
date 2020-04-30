
import {
    CHANGE_THEME
 } from '../types';

export default(state,action) => {
    switch(action.type) {
        case CHANGE_THEME:
            var newImg,newTheme;
            if(state.mode === 'dark') {
               newTheme = 'light';
               newImg = './assets/light.png';
            }else {
               newTheme = 'dark';
               newImg = './assets/dark.png';
            }
            return {
                ...state,
                mode:newTheme,
                heroImg:newImg
            }
        
        default:
            return state;
    }
}