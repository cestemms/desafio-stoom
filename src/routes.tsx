import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Order from './pages/Order';
import Sale from './pages/Sale';

function Routes(){
  return (
    <BrowserRouter>
      <Route path='/'exact component={Landing} />
      <Route path='/order' component={Order} />
      <Route path='/sale' component={Sale} />
    </BrowserRouter>
  )
}

export default Routes;