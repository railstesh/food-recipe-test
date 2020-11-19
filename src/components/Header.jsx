import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user: { isLoggedIn, name }, setUser }) => {
  return (
    <>
      <div className="row p-2 shadow-lg m-0">
        <div className="col-4">
          <Link to="/home">
            <h4 className="text-primary">Food Recipe Book</h4>
          </Link>
        </div>
        {isLoggedIn ?
          <>
            <div className="col-5 text-right">
              <h4><span>{name}</span></h4>
            </div>
            <div className="col-3 text-right">
              <Link to='/add_recipe'>
                <button className="btn btn-sm btn-primary">
                  <i className='fal fa-plus' />
                  <span className="ml-2">Add Recipe</span>
                </button>
              </Link>
              <Link to="/" className="ml-4 mr-3 text-dark">
                <button onClick={() => {
                  setUser({ name: '', isLoggedIn: false })
                }}
                  className="btn btn-sm btn-danger"
                >
                  Logout
                </button>
              </Link>
            </div>
          </> : (
            <div className="col-8 text-right">
              <Link to="/signup" className="ml-4 mr-3 text-dark">
                <button
                  className="btn btn-sm btn-primary"
                >
                  Sign up
                </button>
              </Link>
            </div>
          )}
      </div>
    </>
  )
}

export default Header