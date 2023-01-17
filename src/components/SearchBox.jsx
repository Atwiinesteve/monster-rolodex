// importing react
import React, { Component } from 'react'

// exporting component.
export default class SearchBox extends Component {
  render() {
    return (
			<div>
				<input
					type={this.props.type}
					className={this.props.className}
					placeholder={this.props.placeholder}
					onChange={this.props.onSearchHandler}
				/>
			</div>
		);
  }
}
