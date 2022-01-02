import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import HomeClient from './presentation/pages/client/home/HomeClient';
import NotFound from './presentation/pages/others/notFound/NotFound';
import Theme from './presentation/styles/themes';

function App() {
  return (
    <ThemeProvider theme={Theme()}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeClient} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
