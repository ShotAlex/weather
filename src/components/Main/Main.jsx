import React from 'react';
import {Switch, Route} from "react-router-dom";
import Weather from './Weather/Weather';
import About from './About/About';
import Contacts from './Contacts/Contacts';

const Content = () => {
  return (
    <main className="main">
    <Switch>
      <Route exact path='/' component={Weather} />
      <Route path='/about' component={About} />
      <Route path='/contacts' component={Contacts} />
    </Switch>
    </main>
  );
};

export default Content;
