import React, {Component} from 'react'
import GitHubLogin from './GitHubLogin';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.handler = this.handler.bind(this);
	}

	handler(key, value) {
		this.setState({
			key: value
		})
	}

	render() {
		return (
			<GitHubLogin handler={this.handler}/>
		)
	}
}
