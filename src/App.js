// importing modules.
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = { name: "Stephen" }
  }

  render() {

    return (
			<div className="App">
				<header className="App-header">
					<p>
						Welcome { this.state.name } to React Class Components.
					</p>
					<button onClick={() => {
            this.setState({ name: "Atwiine "})
          }} >Change Name</button>
				</header>
			</div>
		);

  }
  
}

export default App;
