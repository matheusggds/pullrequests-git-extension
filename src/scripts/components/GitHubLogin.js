import React, { Component } from 'react';
import GitHub from 'github-api';

export default class GitHubLogin extends Component {
	constructor(props) {
		super(props);

		this.loginAuthenticate 	= this.loginAuthenticate.bind(this);
		this.handleInput		= this.handleInput.bind(this);
	}

	loginAuthenticate(e) {
		const self = this;

		e.preventDefault();

		/* Authenticate User */
		var gh = new GitHub({
			username: 'matheusggds',
			password: 'nxbxbsx9'
		});

		gh.getUser().getProfile().then(res => {
			this.setState({
				'user': {
					'name': res.data.name,
					'image': res.data.avatar_url
				}
			});

			this.props.handler('user', this.state.user );
			this.props.handler('gh', gh);
			this.props.handler('isLogged', true)

			/* Save authentication locally */
			localStorage.setItem('pr-extension', JSON.stringify({
				'gh': gh,
				'user': this.state.user
			}));
		});
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
