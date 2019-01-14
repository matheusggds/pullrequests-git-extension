import React, { Component } from 'react';
import GitHub from 'github-api';
import Panel from './Panel';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		document.body.className += ' ' + 'dashboard';
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
					<span className="dashboard__last-update -js-update">
						14/01 14:48 <i className="fas fa-bullseye"></i>
					</span>
				</header>
				<section className="dashboard__panels">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<div className="dashboard__panel">
									<Panel/>
								</div>
							</div>
							<div className="col-6">
								<div className="dashboard__panel">
									<Panel/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
