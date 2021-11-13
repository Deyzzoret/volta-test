import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Home } from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import ListState from './components/list-state';
import FormState from './components/form-state';
import Header from './components/header';

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Container maxWidth='lg'>
              <Home />
            </Container>
          </Route>

          <Route path='/form-state'>
            <FormState></FormState>
          </Route>
          <Route path='/list-state'>
            <br></br>
            <br></br>

            <ListState></ListState>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
