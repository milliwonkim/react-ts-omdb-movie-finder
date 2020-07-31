// eslint-disable-next-line
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
