import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

import { loginUser } from "../../apiServices"

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        password,
        email,
      },
      props: { setUser }
    } = this;

    const user = { email, password }

    if (email !== "" && password !== "") {
      loginUser(user).then((res) => {
        if (res && res.success) {
          this.setState({ email: "", password: "" }) // reset form
          setUser({ name: res.data && res.data.userName, isLoggedIn: true })
        } else this.setState({ error: "Invalid User" })
      })
    } else this.setState({ error: "Invalid User" })
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  render() {
    const {
      state: {
        email,
        password,
        error,
      },
      props: { isLoggedIn }
    } = this;

    if (isLoggedIn) return <Redirect to={`/home`} />

    return (
      <>
        <div className="row m-0">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <div className="card mt-5">
              <h1 className="text-center p-3">Login</h1>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12 px-4 mb-1">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={email}
                      name="email"
                      placeholder="email"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 px-4 mb-0">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      name="password"
                      placeholder="xxxxxx"
                      onChange={this.handleChange}
                    />
                  </div>
                  {error && <div className="ml-4 mt-2">
                    <p className="text-danger">{error}</p></div>
                  }
                </div>
                <div className="form-group row mt-4">
                  <div className="col text-center">
                    <div onClick={this.handleSubmit}>
                      <div className="btn btn-primary">Login</div>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Don't have account? <Link to="/signup">Create One</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </>
    );
  }
}

export default Login