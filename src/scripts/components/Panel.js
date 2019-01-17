import React, { Component } from 'react';
import GitHub from 'github-api';

export default class Panel extends Component {

	/* Default state */
	state = {
		loaded: false,
	}

	constructor(props) {
		super(props);

		/* Set default state labels to 0 before Ajax to update */
		this.props.labels.map(el => {
			this.state[el] = 0
		})
	}

	componentDidMount() {
		var gh = new GitHub({
			username: this.props.gh.username,
			password: this.props.gh.password
		});

		let repo = gh.getRepo('jussilabs', this.props.repo);

		/* Ajax to get current store Pull Requests */
		repo.listPullRequests().then(res => {

			/* Loop PR's */
			res.data.map((el) => {
				let currentLabel = el.labels[0].name.replace(' ', '-'); /* Get label name */

				/* Update state incrementing currentLabel attribute */
				this.setState({
					[currentLabel] : this.state[currentLabel] ? this.state[currentLabel] + 1 : 1
				});
			});

			/* Updating state to re-render component */
			this.setState({
				loaded: true
			})

			/* Updating parent State with current labels at this components */
			this.props.labels.map(el => {
				this.props.handlerState([el], (this.props.parentState[el] ? this.props.parentState[el] : 0) + this.state[el])
			})
		})
	}

	renderContent() {
		if (!this.state.loaded) {
			return (
				<ul className="repo-panel__status-list">
					<li className="repo-panel__status-loading">
						loading...
					</li>
				</ul>
			)
		} else {
			return (
				<ul className="repo-panel__status-list">
					<li className="repo-panel__status-item repo-panel__status-item--reviewaquired">
						{this.state['review-required'] ? this.state['review-required'] : '-'}
					</li>
					<li className="repo-panel__status-item repo-panel__status-item--waitingadjust">
						{this.state['waiting-adjust'] ? this.state['waiting-adjust'] : '-'}
					</li>
					<li className="repo-panel__status-item repo-panel__status-item--approved">
						{this.state['waiting-merge'] ? this.state['waiting-merge'] : '-'}
					</li>
				</ul>
			)
		}
	}

	render() {

		return (
			<div className={`repo-panel repo-panel--${this.props.shortname}`}>
				<a href={`https://github.com/jussilabs/${this.props.repo}/pulls`} target="blank" className="repo-panel__header">
					{this.props.name}
				</a>
				<div className="repo-panel__status">
					{this.renderContent()}
				</div>
			</div>
		)

	}
}
