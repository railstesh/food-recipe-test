import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { signupUser } from "../../apiServices"

class Signup extends Component {
  state = {
    email: '',
    password: '',
    userName: '',
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        userName,
        password,
        email,
      },
      props: { setUser }
    } = this;

    const user = {
      userName,
      email,
      password,
    }
    console.log(user)

    if (email !== "" && password !== "") {
      signupUser(user).then((res) => {
        if (res && res.success) {
          this.setState({
            email: "",
            password: "",
            userName: ""
          })
          setUser({ name: userName, isLoggedIn: true })
        } else {
          this.setState({ error: "User exists already, please login instead" })
        }
      })
    } else this.setState({ error: "fields required" })
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
        userName,
        email,
        password,
        error,
      },
      props: { isLoggedIn }
    } = this;

    if (isLoggedIn) return <Redirect to={`/home`} />

    return (
      <div className="row m-0">
        <div className="col-md-3">
        </div>
        <div className="col-md-6">
          <div className="card mt-5">
            <h1 className="text-center p-3">Signup</h1>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12 px-4 py-1 mb-0">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={userName}
                    name="userName"
                    placeholder="john white"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 px-4 mb-0">
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
                <div className="form-group col-md-12 px-4 py-1 mb-0">
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
              </div>
              {error && <div className="ml-4 ">
                <p className="text-danger">{error}</p></div>
              }
              <div className="form-group row mt-4">
                <div className="col text-center">
                  <div onClick={this.handleSubmit}>
                    <div className="btn btn-primary">Signup</div>
                  </div>
                </div>
              </div>
              <p className="ml-5">
                Already have account? <Link to="/">Login Now!</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default Signup;