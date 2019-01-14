import React, { Component } from 'react';
import GitHub from 'github-api';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="dashboard">
				<header className="dashboard__header">
					<span className="dashboard__avatar">
						<img src={this.props.user.image} alt=""/>
					</span>
					<span className="dashboard__welcome-msg">
						Bem vindo, {this.props.user.name}
					</span>
				</header>
			</div>
		)
	}
}
