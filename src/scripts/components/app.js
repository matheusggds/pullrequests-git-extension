import React, {Component} from 'react'
import GitHubLogin from './GitHubLogin';
import Dashboard from './Dashboard';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLogged: false
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

		if(isLogged) return <Dashboard handler={this.handler} user={user} gh={gh}/>

		return <GitHubLogin handler={this.handler}/>
	}
}
