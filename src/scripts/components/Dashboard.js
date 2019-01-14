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
					<div className="dashboard__panel">
						<Panel name="Brastemp" shortname="btp" gh={this.props.gh} repo="brastemp-vtex"/>
					</div>
					<div className="dashboard__panel">
						<Panel name="Consul" shortname="cns" gh={this.props.gh} repo="consul-vtex"/>
					</div>
					<div className="dashboard__panel">
						<Panel name="Direto na Loja" shortname="dnl" gh={this.props.gh} repo="diretonaloja-vtex"/>
					</div>
					<div className="dashboard__panel">
						<Panel name="Compra Certa" shortname="cc" gh={this.props.gh} repo="compra-certa-3-vtex"/>
					</div>
				</section>
			</div>
		)
	}
}
