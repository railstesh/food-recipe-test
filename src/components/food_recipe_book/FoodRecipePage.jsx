import React, { useEffect, useState } from 'react'

import { getFoodRecipeDetails } from '../../apiServices'
import food from '../../assets/images/food3.jpeg'

const FoodRecipePage = (props) => {
  const [foodRecipe, setFoodRecipe] = useState([])
  useEffect(() => {
    const { match: { params: { recipeId } } } = props
    getFoodRecipeDetails({ recipeId }).then((res) => {
      if (res && res.success) {
        setFoodRecipe(res.data)
      } else {
        console.log("something wrong")
      }
    })
  }, [])

  const { recipeIngredients, recipeName, recipeDescription } = foodRecipe

  return (
    <>
      <img
        className="card-img-top mx-auto img-fluid img-circle d-block mb-0"
        src={food}
      />
      <div className="row text-center m-0">
        <div className="col-12 mt-5">
          <h1 className="text-center text-info"><b>{recipeName}</b></h1>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-6 text-left">
              <h2 className="text-secondary mt-3"><b>Recipe Description</b></h2>
              <hr />
              <p>{recipeDescription}</p>
              <div className="mt-2">
                <h4 className="text-danger mt-3"><b>Ingredients List</b></h4>
                <hr />
                {recipeIngredients && recipeIngredients.map((item, i) => (
                  <ul key={i}>
                    <li>
                      {item}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodRecipePage