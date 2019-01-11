import React, {Component} from 'react'

export default class GitHub extends Component {
  render() {
	return (
		<div className="login">
			<div className="container">
				<h1 className="login__title">Login GitHub</h1>
				<hr/>
				<div className="row justify-content-center">
					<div className="col-6">
						<form className="form-login">
							<div className="form-group">
								<label for="login_username">Usuario</label>
								<input type="text" className="form-control" name="login_username" id="login_username" aria-describedby="GitHub Username"/>
							</div>
							<div className="form-group">
								<label for="login_password">Senha</label>
								<input type="password" className="form-control" name="login_password" id="login_password" aria-describedby="GitHub Password"/>
							</div>
							<button type="submit" className="btn btn-primary">Autenticar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
  }
}
