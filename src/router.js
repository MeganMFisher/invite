import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import OurStory from './Components/OurStory/OurStory';
import Details from './Components/Details/Details';
import Slideshow from './Components/Slideshow/Slideshow';

export default (
  <Switch>
    <Route exact path="/" component={ OurStory } />
    <Route path="/weddingDetails" component={ Details } />
    <Route path="/slideshow" component={ Slideshow } />
  </Switch>
)