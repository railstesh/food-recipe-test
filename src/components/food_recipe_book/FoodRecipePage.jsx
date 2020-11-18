import React, { useEffect, useState } from 'react'

import { getFoodRecipeDetails } from '../../apiServices'
import food from '../../assets/images/food3.jpeg'

const FoodRecipePage = ({
  match
}) => {
  const [foodRecipe, setFoodRecipe] = useState([])
  useEffect(() => {
    const { params: { recipeId } } = match
    console.log("FFFFF", recipeId)
    getFoodRecipeDetails({ recipeId }).then((res) => {
      if (res && res.success) {
        console.log(res)
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
      <div className="row text-center">
        <div className="col-12 mt-5">
          <h1 className="text-center">{recipeName}</h1>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-6 text-left">
              <h2>Recipe Description</h2>
              <p>{recipeDescription}</p>
              <div className="mt-2">
                <h4>Ingredients List</h4>
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