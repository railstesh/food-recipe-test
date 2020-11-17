import React, { Component } from 'react';
// import { Redirect } from 'react-router';

class Signup extends Component {
  state = {
    userId: '',
    password: '',
    error: '',
    userSignup: false,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        password,
        userId,
      },
    } = this;

    const user = {
      userId,
      password,
    }
    console.log(user)

    // SignupUser(user).then((res) => {
    //   if (res && res.success) {
    //     this.setState({ userSignup: true })
    //   } else {
    //     this.setState({ error: "something wrong" })
    //   }
    // })

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
        userId,
        password,
        error,
        userSignup,
      },
    } = this;

    return (
      <>
        {/* {userSignup && <Redirect to={`/user_page/${userId}`} />} */}
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <div className="card mt-5">
              <h1 className="text-center p-3">Signup</h1>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12 p-4">
                    <label>userId</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userId"
                      value={userId}
                      name="userId"
                      placeholder="userId"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 p-4 mb-0">
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
                  {error && <div className="ml-5 ">
                    <p className="text-danger">{error}</p></div>
                  }
                </div>
                <div className="form-group row ">
                  <div className="col text-center">
                    <div onClick={this.handleSubmit}>
                      <div className="btn btn-primary">Signup</div>
                    </div>
                  </div>
                </div>
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

export default Signup;