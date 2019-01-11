import React, { Component } from 'react'

export default class GitHubLogin extends Component {
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
									ref="username"
								/>
							</div>
							<div className="form-group">
								<label>Senha</label>
								<input type="password" className="form-control" name="login_password" id="login_password" aria-describedby="GitHub Password"/>
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
