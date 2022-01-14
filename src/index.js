import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './assets/layout/Layout';
import Home from './assets/screens/Home/Home';
import Log from './assets/screens/Log/Log';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routing from './assets/routes/Routing';

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Routing />
        </Layout>
    </React.StrictMode>,
    document.getElementById('root')
);