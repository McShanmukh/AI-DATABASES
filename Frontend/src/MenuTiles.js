import React from 'react';
import './MenuTiles.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const AIEconomics = () => (
  <div>
    <h1>THIS IS A ECONOMIC PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);
const AIDemographics = () => (
  <div>
    <h1>THIS IS A Demographic PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);
const AITradeAnalytics = () => (
  <div>
    <h1>THIS IS A Trade Analytics PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);
const AIIndustrialResearch = () => (
  <div>
    <h1>THIS IS A Industrial Research PAGE</h1>
    <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
  </div>
);

function MenuTiles() {
  return (
    <div>
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/AI-Economics' component={AIEconomics} />
        <Route path='/AI-TRADE_ANALYTICS' component={AITradeAnalytics} />
        <Route path='/AI-DEMOGRAPHY' component={AIDemographics} />
        <Route path='/AI-INDUSTRIAL_RESEARCH' component={AIIndustrialResearch} />
      </Switch>
    </div>
  );
}

export default {MenuTiles,AIDemographics,AIEconomics,AIIndustrialResearch,AITradeAnalytics};
