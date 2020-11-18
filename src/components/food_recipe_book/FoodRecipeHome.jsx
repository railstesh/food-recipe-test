import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';

import { getFoodRecipes, deleteRecipe } from '../../apiServices'
import FoodRecipeCard from './FoodRecipeCard'

const FoodRecipeHome = ({ isLoggedIn }) => {
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

  if (!isLoggedIn) return <Redirect to='/' />

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
    <div className='banner'>
      <h3 className='heading pt-4'>
        “Let food be thy medicine and medicine be thy food.”
      </h3>
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
    </div>
  )
}

export default FoodRecipeHome