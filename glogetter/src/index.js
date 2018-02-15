import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';
import SearchBox from './components/SearchBox';


const Root = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={SearchBox} />
                <Route exact path="/product/:productId" component={App} />               
                <Route path="/notfound" component={NotFound} />
            </div>
        </Router>
    )
}

render(<Root />, document.getElementById('main'));

