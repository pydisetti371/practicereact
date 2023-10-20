import React, { Component } from 'react';
import logo from '../logo.svg';
import ErrorBoundary from './errorBoundary.js';
import Counter from './counter.js';
class Header extends Component {
    render() {
        return (
            <div>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>Learn React from class Base Approach</p>
                <ErrorBoundary>

                </ErrorBoundary>

            </div>
        )
    }
}

export default Header;