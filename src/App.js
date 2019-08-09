import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarIndex from './components/CarIndex'

export default class App extends React.Component { 
  
  render() {
    return (
      <div className="App">
        <header className="Car-header">
          <p>
            Cars! Mostly Hondas.
            <CarIndex />
          </p>
        </header>
      </div>
    );
  }
}

