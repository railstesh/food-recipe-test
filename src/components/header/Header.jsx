import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="row p-2 shadow-lg">
        <div className="col-8">
          <h4>Food Recipe Book</h4>
        </div>
        <div className="col-4 text-right">
          <Link to='/recipe_form'>
            <button className="btn btn-sm btn-primary">
              <i className='fal fa-plus' />
              <span className="ml-2">Add New Food Recipe</span>
            </button>
          </Link>
          <Link to="/" className="ml-4 mr-3 text-dark">
            <button className="btn btn-sm btn-danger">LogOut</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header