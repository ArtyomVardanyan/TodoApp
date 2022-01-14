import React from 'react';
import { Link } from 'react-router-dom';

const Log = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-3xl mb-3">Welcome to TodoApp</h1>
                <Link
                    className="flex justify-center transition hover:bg-pink-500 bg-pink-400 rounded px-20 py-2"
                    to="/home"
                >
                    Start now!
                </Link>
            </div>
        </div>
    );
};

export default Log;
