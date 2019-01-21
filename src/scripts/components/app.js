import React, {Component} from 'react'
import GitHubLogin from './GitHubLogin';
import Dashboard from './Dashboard';

const localInfos = JSON.parse(localStorage.getItem('pr-extension'));

export default class App extends Component {

	state = {
		isLogged: localInfos && localInfos.gh && localInfos.user && true,
		gh: localInfos && localInfos.gh,
		user: localInfos && localInfos.user
	}

	handler = (key, value) => {
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
