import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../screens/Home/Home';
import Log from '../screens/Log/Log';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Log />} />
            </Routes>
        </Router>
    );
}

export default Routing;