import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import AddEditPage from '../AddEditPage/AddEditPage';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/edit/:id"><AddEditPage /></Route>
        <Route exact path="/add" component={AddEditPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
        <Route component={MainPage} />
    </Switch>
  );
}

export default App;
