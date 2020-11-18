import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import DeleteModal from './DeleteModal'
import food5 from '../../assets/images/food5.png'

const FoodRecipeCard = ({
  data,
  handleDelete,
  toggleModal,
  openModal,
}) => {
  return (
    <>
      <div className="col-md-3 m-0 mb-3 px-2 service-card">
        <div className="card shadow p-3">
          <img
            className="card-img-top mx-auto img-fluid img-circle d-block mb-0"
            src={food5}
            alt="avatar"
          />
          <div className="card-body p-2">
            <div className="row">
              <div className="col-8">
                <Link to={`/recipe_page/${data.recipeId}`}><p className="mb-1">{data.recipeName}</p></Link>
                <p className="card-category m-0">Author | {data.recipeAuthorName}</p>
              </div>
              <div className="col-4 text-right">
                <div className="row">
                  <div className="col-2">
                    {data.recipeType === "non-veg" ? <i className="fas fa-drumstick-bite"></i>
                      : <i className="fas fa-carrot"></i>
                    }
                  </div>
                  <div className="col-2">
                    <i className="fas fa-edit"></i>
                  </div>
                  <div className="col-2">
                    <i onClick={toggleModal} className="fas fa-trash"></i>
                  </div>
                </div>

              </div>
            </div>
            <p className="card-content mt-1 mb-0">
              {data.recipeDescription}
            </p>
          </div>
        </div>
      </div>
      <DeleteModal
        open={openModal}
        toggle={toggleModal}
        message="Are you sure you want to delete this recipe?"
        title="Delete"
        submitButtonName="Delete"
        onSubmit={() => handleDelete(data.recipeId)}
      />
    </>
  )
}

FoodRecipeCard.defaultProps = {
  data: {},
}

FoodRecipeCard.propTypes = {
  data: PropTypes.object,
}

export default FoodRecipeCard