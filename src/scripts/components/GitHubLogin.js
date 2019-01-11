import React, { Component } from 'react';
import GitHub from 'github-api';

export default class GitHubLogin extends Component {
	constructor(props) {
		super(props);

		this.loginAuthenticate 	= this.loginAuthenticate.bind(this);
		this.handleInput		= this.handleInput.bind(this);
	}

	loginAuthenticate(e) {
		e.preventDefault();

		let GitUser = new GitHub({
			username: this.state.login_username,
			password: this.state.login_password
		});

		console.log(GitUser.getUser());

		if (GitUser) {
			this.props.handler('GitUser', GitUser);
		}
	}

	handleInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div className="login">
				<div className="container">
					<h1 className="login__title"><i className="fab fa-github"></i> Login GitHub</h1>
					<hr/>
					<div className="row justify-content-center">
						<div className="col-6">
							<form className="form-login" onSubmit={this.loginAuthenticate}>
								<div className="form-group">
									<label>Usuario</label>
									<input
										type="text"
										className="form-control"
										name="login_username"
										id="login_username"
										aria-describedby="GitHub Username"
										onChange={this.handleInput}
									/>
								</div>
								<div className="form-group">
									<label>Senha</label>
									<input
										type="password"
										className="form-control"
										name="login_password"
										id="login_password"
										aria-describedby="GitHub Password"
										onChange={this.handleInput}
										autoComplete="new-password"
									/>
								</div>
								<button type="submit" className="btn btn-primary float-right">Autenticar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
