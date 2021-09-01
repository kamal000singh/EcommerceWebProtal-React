import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Home from './pages/Home';
import ShoppingCard from './pages/ShoppingCard';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories/:id">
          <Categories />
        </Route>
        <Route exact path="/ShoppingCard/addtocard">
          <ShoppingCard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
