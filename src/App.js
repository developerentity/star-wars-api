import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import PersonPage from './pages/PersonsPage';
import NotFound from './pages/NotFound';
import Menu from './elements/Menu'
import PlanetsPage from './pages/PlanetsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <div className="mainWrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
            <MainPage />
          </Route>
          <Route path="/persons">
            <Menu />
            <PersonPage />
          </Route>
          <Route path="/planets">
            <Menu />
            <PlanetsPage />
          </Route>
          <Route path="*">
            <Menu />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
