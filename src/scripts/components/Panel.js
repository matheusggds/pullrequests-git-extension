import React, { Component } from 'react';
import GitHub from 'github-api';

export default class Panel extends Component {
	constructor(props) {
		super(props);

		this.statusArry = ['approved', 'waiting-merge', 'waiting-adjust', 'review-required'];

		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		var gh = new GitHub({
			username: this.props.gh.username,
			password: this.props.gh.password
		});

		let repo = gh.getRepo('jussilabs', this.props.repo);

		repo.listPullRequests().then(res => {

			res.data.map((el) => {
				let currentLabel = el.labels[0].name.replace(' ', '-');

				console.log(currentLabel);

				if (this.statusArry.includes(currentLabel)) {
					this.setState({
						[currentLabel] : this.state[currentLabel] ? this.state[currentLabel] + 1 : 1
					});
				}
			});

			/* let filteredData = res.data.map((el) => {
				return {
					owner: {
						avatar: el.user.avatar_url,
						url: el.user.html_url,
					},
					labels: el.labels,
					link: el.html_url,
					id: el.number,
					title: el.title
				}
			});
			 */

			this.setState({
				loaded: true
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
							<li className="repo-panel__status-item repo-panel__status-item--reviewaquired">{this.state['review-required']}</li>
							<li className="repo-panel__status-item repo-panel__status-item--waitingadjust">{this.state['waiting-adjust']}</li>
							<li className="repo-panel__status-item repo-panel__status-item--approved">{this.state['approved']}</li>
							<li className="repo-panel__status-item repo-panel__status-item--waitingmerge">{this.state['waiting-merge']}</li>
						</ul>
					</div>
				</div>

				/* <div className={"repo-panel repo-panel--" + this.props.shortname}>
					<div className="repo-panel__title">
						{this.props.name}
					</div>
					<div className="repo-panel__body">
						{this.state.pullrequests.map((el, idx) => {
							return (
								<div id={el.id} key={el.id} className="repo-panel__item">
								<span className="repo-panel__thumbavatar">
									<a href={el.owner.url}>
										<img src={el.owner.avatar} alt={el.owner.url}/>
									</a>
								</span>
									<span className="repo-panel__pr-title">
										{el.title}
									</span>
									<span className={"repo-panel__label repo-panel__label--" + el.labels[0].name.replace(' ', '-')}>
									</span>
								</div>
							)
						})}
					</div>
				</div> */
			)
		}
	}
}
