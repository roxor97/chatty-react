import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container">
        <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>
            Iniciar sesión en
            <Link className="title ml-2" to="/">
              Chatty
            </Link>
          </h1>
          <p className="lead">
            Complete el formulario a continuación para iniciar sesión en su cuenta.
          </p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div className="form-group">
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
            <button className="btn btn-primary px-5" type="submit">Login</button>
          </div>
          <p>También puede iniciar sesión con cualquiera de estos servicios</p>
          <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Inicia sesión con Google
          </button>
          <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
            Iniciar sesión con GitHub
          </button>
          <hr />
          <p>
            ¿No tienes una cuenta? <Link to="/signup">Registrarse</Link>
          </p>
        </form>

      </div>
    );
  }
}