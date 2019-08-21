import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock'

import './css/App.scss';
import './css/animations.scss';

function App() {
  return (
    <div className="App">    
		<Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));