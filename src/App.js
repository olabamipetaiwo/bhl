import React ,{Fragment} from 'react';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import NotFound from './components/layout/notFoundComponent';
import Home from './components/pages/homeComponent';
import styled from "@emotion/styled";
import './styles/root.css';

import ThemeState from '../src/context/themeContext/themeState';


const Main = styled.section`
   margin:0;
   padding:3rem 10rem;
`;


const App = () => {
    
      return (
            <ThemeState>
                <Main>
                     <Router>
                            <Fragment>
                                <Switch>
                                    <Route exact path="/" component={Home}/> 
                                    <Route component={NotFound} />
                                </Switch>
                          </Fragment>
                    </Router>
                </Main>
           </ThemeState>
    );
}

export default App;
