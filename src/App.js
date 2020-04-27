import React ,{Fragment} from 'react';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import NotFound from './components/layout/notFoundComponent';
import Home from './components/pages/homeComponent';
import styled from "@emotion/styled";


const Main = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const App = () => {
      return (
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
    );
}

export default App;
