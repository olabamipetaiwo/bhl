import {createContext,useContext} from "react";

const defaultContextData = {
  xs:"21.875rem",
  xmPhone:"25rem",
  mdPhone:"31.25rem",
  phone:"37.5rem",
  tablet:"43.75rem",
  mdTablet:"50rem",
  smScreen:"56.25rem",
  misc:"56.25rem",
  bgScreen:"75rem",
  bgDesktop:"112.5rem"
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);


export {  useTheme };




// 350 - xs -21.85
// 400 - xmPhone - 25
// 500 - mdPhone - 31.25
// 600 - phone -37.5
// 700 - tablet - 43.75
// 800 - mdTablet - 50
// 900 - smScreen - 56.25
// 1000 - misc  - 62.5
// 1200 - bgScreen - 75
// 1800 - bgDesktop - 112.5

// @media only screen and (max-width: 56.25em) {

// }

// @media screen and (min-width: ${bpMed}) {
        
// }