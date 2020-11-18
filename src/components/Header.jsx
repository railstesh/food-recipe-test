import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <div className="row p-2 shadow-lg m-0">
          <div className="col-8">
            <Link to="/home">
              <h4 className="text-primary">Food Recipe Book</h4>
            </Link>
          </div>
          <div className="col-4 text-right">
            <Link to='/recipe_form'>
              <button className="btn btn-sm btn-primary">
                <i className='fal fa-plus' />
                <span className="ml-2">Add New Food Recipe</span>
              </button>
            </Link>
            <Link to="/" className="ml-4 mr-3 text-dark">
              <button className="btn btn-sm btn-danger">Logout</button>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Header