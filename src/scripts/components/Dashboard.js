import React, { Component } from 'react';
import Panel from './Panel';

export default class Dashboard extends Component {

	state = {
		toggleUpdate: 0
	}

	labels = ['waiting-merge', 'waiting-adjust', 'review-required']

	constructor(props) {
		super(props);

		/* Set default state labels to 0 before Ajax to update */
		this.labels.map(el => {
			this.state[el] = 0
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		chrome.runtime.sendMessage(JSON.stringify({
			text: String(nextState['review-required']),
			color: 'red'
		}))

		return true;
	}

	componentDidMount() {
		/* Add class to body */
		document.body.classList.add('dashboard');
	}

	componentWillUnmount() {
		/* Remove class to body */
		document.body.classList.remove('dashboard');
	}

	handlerState = (key, value) => {
		this.setState({
			[key]: value
		});
	}

	toggleUpdate = (e) => {
		this.setState({
			toggleUpdate: !this.state.toggleUpdate
		})
	}

	logout = (e) => {
		e.preventDefault();

		if (localStorage.getItem('pr-extension')) {
			this.props.handler('isLogged', false);
			this.props.handler('user', null);
			this.props.handler('gh', null);

			localStorage.removeItem('pr-extension')

			chrome.runtime.sendMessage(JSON.stringify({
				text: '',
				color: 'red'
			}))
		}
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
				<ul className="label-description">
					<li className="label-description__item">
						<span className="label-description__color label-description__color--reviewaquired"></span>
						<span className="label-description__desc">Review Required</span>
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
								update={this.state.toggleUpdate}
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
								update={this.state.toggleUpdate}
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
								update={this.state.toggleUpdate}
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
								update={this.state.toggleUpdate}
							/>
						</div>
					</div>
				</section>
				<footer className="dashboard__footer">
					<p>Jussi 2019 - <a href="#" onClick={this.logout}>Sair</a></p>
				</footer>
			</div>
		)
	}
}
