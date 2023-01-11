// importing modules.
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    // user
    // this.state = { name: "Stephen" }

    // monsters
    this.state = {
      monsters: [
        {name: "Kiiza"},
        {name: "Atwiine"},
        {name: "Stephen"},
        {name: "JavaScript"},
        {name: "React"}
      ]
    };

  }

  render() {

    return (
			<div className="App">

				{/* <header className="App-header">
					<p>
						Welcome { this.state.name } to React Class Components.
					</p>
					<button onClick={() => {
            this.setState({ name: "Atwiine "})
          }} >Change Name</button>
				</header> */}

        {/* Rendering monsters */}
        { 
          this.state.monsters.map((monster) => {
            return <h1 key={ monster._id } >{ monster.name }</h1>
          })
        }

			</div>
		);

  }
  
}

export default App;
