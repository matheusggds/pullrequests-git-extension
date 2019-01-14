import React, {Component} from 'react'
import GitHubLogin from './GitHubLogin';

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
			key: value
		})
	}

	render() {
		return (
			this.state.isLogged ? <Dashboard handler={this.handler}/> : <GitHubLogin handler={this.handler}/>
		)
	}
}
