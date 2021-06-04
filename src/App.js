import React from 'react';
import RomanToDecimal from './component/RomanToDecimal';
import './App.css';
import DecimalToRoman from './component/DecimalToRoman';
import { Route, Switch } from 'react-router';

const App = () => {
  return (
    <div>
        <Switch>
            <Route path="/" exact component={RomanToDecimal} />
            <Route path="/dectorom" exact component={DecimalToRoman} />
        </Switch>
    </div>
  );
};
export default App;
