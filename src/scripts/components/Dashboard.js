import React, { Component } from 'react';
import GitHub from 'github-api';
import Panel from './Panel';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		document.body.className += ' ' + 'dashboard';

		this.labels = ['waiting-merge', 'waiting-adjust', 'review-required']

		/* Create state obj */
		this.state = {}

		/* Set default state labels to 0 before Ajax to update */
		this.labels.map(el => {
			this.state[el] = 0
		})

		this.handlerState = this.handlerState.bind(this);
	}

	handlerState (key, value) {
		this.setState({
			[key]: value
		});
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
				<ul className="label-description">
					<li className="label-description__item">
						<span className="label-description__color label-description__color--reviewaquired"></span>
						<span className="label-description__desc">Review Aquired</span>
					</li>
					<li className="label-description__item">
						<span className="label-description__color label-description__color--waitingadjust"></span>
						<span className="label-description__desc">Waiting Adjust</span>
					</li>
					<li className="label-description__item">
						<span className="label-description__color label-description__color--approved"></span>
						<span className="label-description__desc">Waiting Merge</span>
					</li>
				</ul>
				<section className="dashboard__panels">
					<div className="row">
						<div className="col-6">
							<Panel
								name="Brastemp"
								shortname="btp"
								gh={this.props.gh}
								repo="brastemp-vtex"
								parentState={this.state}
								labels={this.labels}
								handlerState={this.handlerState}
							/>
						</div>
						<div className="col-6">
							<Panel
								name="Consul"
								shortname="cns"
								gh={this.props.gh}
								repo="consul-vtex"
								parentState={this.state}
								labels={this.labels}
								handlerState={this.handlerState}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<Panel
								name="Direto na Loja"
								shortname="dnl"
								gh={this.props.gh}
								repo="diretonaloja-vtex"
								parentState={this.state}
								labels={this.labels}
								handlerState={this.handlerState}
							/>
						</div>
						<div className="col-6">
							<Panel
								name="Compra Certa"
								shortname="cc"
								gh={this.props.gh}
								repo="compra-certa-3-vtex"
								parentState={this.state}
								labels={this.labels}
								handlerState={this.handlerState}
							/>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
