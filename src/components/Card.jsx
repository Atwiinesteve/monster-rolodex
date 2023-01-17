// importing react
import React, { Component } from 'react'

// card component
export class Card extends Component {
  render() {
    const users = this.props.users;
    return (
			<div className="card-list">
				{users.map((user) => {
					const { name, email, id } = user;

					return (
						<div className="card-container" key={id}>
							<img
								src={`https://robohash.org/${id}?set=set2&size=180x180`}
								alt={user.name}
							/>
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
					);
				})}
			</div>
		);
  }
}

// export component.
export default Card;
