import React, { useEffect, useState } from 'react'

import { getFoodRecipes, deleteRecipe } from '../../apiServices'
import FoodRecipeCard from './FoodRecipeCard'
import food from '../../assets/images/food4.jpeg'

const FoodRecipeHome = () => {
  const [foodRecipes, setFoodRecipes] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [recipeId, setRecipeId] = useState('')
  const toggleModal = (recipeId) => {
    setOpenModal(!openModal)
    setRecipeId(recipeId)
  }

  useEffect(() => {
    getFoodRecipes().then((res) => {
      if (res && res.success) {
        setFoodRecipes(res.data)
      }
    })
  }, [])

  const handleDelete = () => {
    deleteRecipe({ recipeId }).then((res) => {
      if (res && res.success) {
        setOpenModal(!openModal)
        getFoodRecipes().then((res) => {
          if (res && res.success) {
            setFoodRecipes(res.data)
          }
        })
      }
    })
  }

  return (
    <>
      <div className="card">
        <img
          className="card-img-top mx-auto img-fluid img-circle d-block mb-0"
          src={food}
        />
      </div>
      <div className="row m-0 p-3">
        {foodRecipes.map((item, i) => (
          <FoodRecipeCard
            data={item}
            key={i}
            toggleModal={toggleModal}
            handleDelete={handleDelete}
            openModal={openModal}
          />
        ))}
      </div>

    </>
  )
}

export default FoodRecipeHome