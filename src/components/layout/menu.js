import React ,{Fragment,useEffect,useState}  from "react";
import { animated } from "react-spring";
import styled from "@emotion/styled";


const darkTheme = {
    '--bg':'#00101D',
    '--nav':'#ffffff',
    '--p-white':'#ffffff',
    '--feature-heading':'#ffffff',
    '--feature-p':'#cccccc',
    '--testimony-bg':'#091E29',
    '--testimony-heading':'#ffffff',
    '--testimony-p':'#cccccc',
    '--testimoy-footer':'#999999',
    '--footer-heading':'#ffffff',
    '--footer-p':'#cccccc',
    '--footer-list':'#cccccc',
    '--footer-track':'#ffffff',
    '--text-blue':'#0071BC',
    '--carousel-btn':'#29ABE2',
    '--test':'red'
};

const lightTheme = {
    '--bg':'#F1F1F1',
    '--nav':'#000000',
    '--p-white':'#282828',
    '--feature-heading':'#333333',
    '--feature-p':'#666666',
    '--testimony-bg':'#F7FBFF',
    '--testimony-heading':'#000000',
    '--testimony-p':'#333333',
    '--testimoy-footer':'#666666',
    '--footer-heading':'#000000',
    '--footer-p':'#000000',
    '--footer-list':'#999999',
    '--footer-track':'#01324E',
    '--text-blue':'#0071BC',
    '--carousel-btn':'#29ABE2',
    '--test':'yellow'
  };
  

const MenuRight = ({ style }) => {
    const cur = localStorage.mode ? localStorage.getItem('mode') : 'dark';  
    const [currentMode, setCurrentMode] = useState(cur);
    const [isChecked, setIsChecked] = useState(false);
  
    useEffect(() => {
      const theme = currentMode === 'light' ? lightTheme : darkTheme;
      localStorage.setItem('mode',currentMode);
      Object.keys(theme).forEach(key => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
      });
    }, [currentMode]);
  
    useEffect(() => {
      if (localStorage.getItem('mode') === 'dark') {
        setCurrentMode('dark');
        setIsChecked(false);
      }else {
        setCurrentMode('light');
        setIsChecked(true);
      }
    }, []);
  
    const toggleTheme = () => {
      // const newMode = currentMode === 'light' ? 'dark' : 'light';
      // setIsChecked(!isChecked);
      // setCurrentMode(newMode);
      // localStorage.setItem('mode', newMode);

      if(currentMode == 'light') {
        setCurrentMode('dark');
        setIsChecked(false);
        localStorage.setItem('mode','dark');
      }else {
        setCurrentMode('light');
        setIsChecked(true);
        localStorage.setItem('mode', 'light');
      }
    };

    
 return (
    <Menu>
        <animated.div className="menu menu--right" style={style}>
          <nav>
                <ul className="menu-list menu-list--right">
                    <li className="menu-list-item menu-list-item--right">
                    <a href="/">Home</a>
                    </li>
                    <li className="menu-list-item menu-list-item--right">
                    <a href="/">About</a>
                    </li>
                    <li className="menu-list-item menu-list-item--right">
                    <a href="/">Work</a>
                    </li>
                    <li className="menu-list-item menu-list-item--right">
                       <a href="/">Contact</a>
                    </li>
                    <li className="menu__toggle">
                            Switch Mode
                            <Toggle>
                                <Input
                                    type="checkbox"
                                    onChange={toggleTheme}
                                    checked={isChecked}
                                    id="modeToggle"
                                />
                                <label htmlFor="modeToggle"></label>
                            </Toggle>
                    </li>
                </ul>
           </nav>
           
        </animated.div>
    </Menu>
   );
}

export default MenuRight;

const Menu = styled.section`
    div.menu {
        position: absolute;
        background-color:var(--testimony-bg);
        color:var(--testimony-heading);
        z-index: 30;

        nav {

            ul {
                &.menu-list {
                    padding: 0;
                    list-style: none;

                    li {
                        &.menu-list-item {
                            font-family:'Maven Pro', sans-serif;
                        }

                        &.menu-list-item--right {
                            margin: 2.4rem 0;
                        }

                        &.menu__toggle {
                            text-decoration: none;
                            font-family: "Maven Pro", sans-serif;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 1.6rem;
                            line-height: 2.4rem;
                            display:flex;
                            justify-content-space-between;
                            align-items:center;
                        }

                        a {
                            text-decoration: none;
                               color:var(--testimony-heading);
                               transition:all .4s;

                            &:hover {
                                color:var(--testimony-p);
                                font-weight:600;
                            }
                        }
                    }
                }

                &.menu-list--right {
                   margin: 10rem 2.4rem;
               }
            }
            
            
        }
    }
    div.menu--right {
        top: 0;
        left: 0;
        width: 30rem;
        height: 100vh;
    }      
`;


const Toggle = styled.div`
  position: relative;
  cursor:pointer;
  margin-left:5rem;

  &:after {
    content: '☀️';
    font-size: 1.8rem;
    position: absolute;
    top: .7rem;
    left: 3.7rem;
  }

  &:before {
    content: '🌙';
    font-size: 1.8rem;
    position: absolute;
    top: .7rem;
    left: .6rem;
    z-index: 1;
  }
`;

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  opacity: 0;
  cursor: pointer;

  & + label {
      position: relative;
      display: block;
      height: 3.2rem;
      width: 6.4rem;
      border-radius: 3.2rem;
      transition: 0.25s ease-in-out;
      background: #3a9df8;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
      cursor:pointer;
      transition:all .3s;

      &:after {
            content: '';
            position: absolute;
            border-radius: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            transition: 0.25s ease-in-out;
            width:3.2rem;
            height:3.2rem;
            cursor:pointer;
            transition:all .3s;
            background:#F1F1F1;
        }
  }

  &:checked + label {
        background: #4a5b90;
        transition:all .3s;
    
        &:after {
          transform: translate3d(3.2rem, 0, 0);
        }
  }

`;

