import React, {Component} from 'react'
import GitHubLogin from './GitHubLogin';

export default class App extends Component {

	loginAuthenticate(e) {
		e.preventDefault();

		console.log(this.refs.username);
	}

	render() {
		return (
			<GitHubLogin/>
		)
	}
}
