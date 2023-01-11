// importing modules.
import React, { Component } from "react";
import "./App.css";

class App extends Component {

	constructor() {
		super();

		// user
		this.state = { name: "Stephen" }

		// monsters
		this.state = {
			monsters: [
				{ _id: 1, name: "Kiiza" },
				{ _id: 2, name: "Atwiine" },
				{ _id: 3, name: "Stephen" },
				{ _id: 4, name: "JavaScript" },
				{ _id: 5, name: "React" },
			],
		};

    // users
    this.state = {
      usersList: []
    };
	};

  // Mounting a Component - Component first renders
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { usersList: users };
					},
					() => {
						console.log(this.state);
					},
				),
			);
  };

  // rendering the UI Component
	render() {
		return (
			<div className="App">
				{/* =================================== */}

				{/* <header className="App-header">
					<p>
						Welcome { this.state.name } to React Class Components.
					</p>
					<button onClick={() => {
            this.setState({ name: "Atwiine "})
          }} >Change Name</button>
				</header> */}

				{/* ================================== */}

				{/* Rendering monsters */}
				{/* {this.state.monsters.map((monster) => {
					return <h1 key={monster._id}>{monster.name}</h1>;
				})}; */}

				{/* ================================== */}

        {/* Fetching Data from an API */}
        { this.state.usersList.map((user) => {
          return (
						<div key={user.id} className="users">
							<h3>{user.name}</h3>
						</div>
					);
        }) }
			</div>
		);
	}
}

export default App;
