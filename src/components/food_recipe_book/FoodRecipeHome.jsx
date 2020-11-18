import React, { useEffect, useState } from 'react'
import { getFoodRecipes } from '../../apiServices'
import FoodRecipeCard from './FoodRecipeCard'

const FoodRecipeHome = () => {
  const [foodRecipes, setFoodRecipes] = useState([])

  useEffect(() => {
    getFoodRecipes().then((res) => {
      if (res && res.success) {
        console.log(res)
        setFoodRecipes(res.data)
      } else {
        console.log("something wrong")
      }
    })
  }, [])

  return (
    <>
      <div className="card">
        {/* <img
          className="card-img-top mx-auto img-fluid img-circle d-block mb-0"
          src={require(`../../assets/images/food1.jpeg`)}
        /> */}
      </div>
      <div className="row m-0 p-3">
        {foodRecipes.map((item, i) => (
          <FoodRecipeCard data={item} key={i} />
        ))}
      </div>

    </>
  )
}

export default FoodRecipeHome