import React, {Component} from 'react'
import GitHubLogin from './GitHubLogin';
import Dashboard from './Dashboard';

export default class App extends Component {

	constructor(props) {
		super(props);

		let localInfos = JSON.parse(localStorage.getItem('pr-extension'));

		this.state = {
			isLogged: localInfos && localInfos.gh && localInfos.user && true,
			gh: localInfos && localInfos.gh,
			user: localInfos && localInfos.user
		}

		this.handler = this.handler.bind(this);
	}

	handler(key, value) {
		this.setState({
			[key]: value
		})
	}

	render() {
		const { isLogged, user, gh } = this.state;

		if(isLogged && gh && user) return <Dashboard handler={this.handler} user={user} gh={gh}/>

		return <GitHubLogin handler={this.handler}/>
	}
}
