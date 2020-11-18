import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import DeleteModal from './DeleteModal'
import food5 from '../../assets/images/food5.png'
import veg from '../../assets/images/veg.png'
import nonVeg from '../../assets/images/non-veg.png'

const truncate = text => {
  if (text.length > 70) return text.substring(0, 70) + '...';
  return text;
};

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
          <Link to={`/recipe_page/${data.recipeId}`}>
            <img
              className="card-img-top mx-auto img-fluid img-circle d-block mb-0"
              src={food5}
              alt="avatar"
            />
          </Link>
          <div className="card-body p-2">
            <div className="row">
              <div className="col-8">
                <Link to={`/recipe_page/${data.recipeId}`}><p className="mb-1">{data.recipeName}</p></Link>
              </div>
              <div className="col-4 text-right">
                <div className="row">
                  <div className="col-2">
                    {data.recipeType === "non-veg" ?
                      <img
                        height='15px'
                        width='15px'
                        src={nonVeg}
                        alt="avatar"
                      />
                      :
                      <img
                        height='15px'
                        width='15px'
                        src={veg}
                        alt="avatar"
                      />
                    }
                  </div>
                  <div className="col-2">
                    <Link to={`/edit_recipe/${data.recipeId}`}>
                      <i style={{ cursor: "pointer" }} className="fas fa-edit"></i>
                    </Link>
                  </div>
                  <div className="col-2">
                    <i style={{ cursor: "pointer" }} onClick={() => toggleModal(data.recipeId)} className="fas fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-content mt-1 mb-0">
              {truncate(data.recipeDescription)}
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
        onSubmit={() => handleDelete()}
      />
    </>
  )
}

FoodRecipeCard.defaultProps = {
  data: {},
  openModal: false,
}

FoodRecipeCard.propTypes = {
  data: PropTypes.object,
  handleDelete: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool,
}

export default FoodRecipeCard