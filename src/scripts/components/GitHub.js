import React, {Component} from 'react'

export default class GitHub extends Component {
  render() {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1>GitHub Info</h1>
				<form className="form-login">
					<div className="form-group">
						<label for="login_username">Usuário</label>
						<input type="text" className="form-control" name="login_username" id="login_username" aria-describedby="GitHub Username"/>>
						<small id="helpId" className="form-text text-muted">Usuário do GitHub</small>
					</div>
					<div className="form-group">
						<label for="login_password">Senha</label>
						<input type="password" className="form-control" name="login_password" id="login_password" aria-describedby="GitHub Password"/>
					</div>
					<button type="submit" className="btn btn-primary">Autenticar</button>
				</form>
			</div>
		</div>
	)
  }
}
