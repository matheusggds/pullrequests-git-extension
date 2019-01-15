import React, { Component } from 'react';
import GitHub from 'github-api';

export default class Panel extends Component {
	constructor(props) {
		super(props);

		/* Default state */
		this.state = {
			loaded: false,
		}

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

		repo.listPullRequests().then(res => {

			/* Loop PR's */
			res.data.map((el) => {
				let currentLabel = el.labels[0].name.replace(' ', '-'); /* Get label name */


				this.setState({
					[currentLabel] : this.state[currentLabel] ? this.state[currentLabel] + 1 : 1
				});
			});

			this.setState({
				loaded: true
			})

			this.props.labels.map(el => {
				this.props.handlerState([el], (this.props.parentState[el] ? this.props.parentState[el] : 0) + this.state[el])
			})
		})
	}

	render() {
		if (!this.state.loaded) {
			return <span>Loading</span>
		} else {
			return (
				<div className={"repo-panel repo-panel--" + this.props.shortname}>
					<div className="repo-panel__header">
						{this.props.name}
					</div>
					<div className="repo-panel__status">
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
					</div>
				</div>
			)
		}
	}
}
