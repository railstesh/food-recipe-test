const express = require("express")
const foodRecipeController = require("../controllers/foodRecipeController")

const router = express.Router()

router.post("/add_recipe", foodRecipeController.addRecipe)
router.post("/get_recipe", foodRecipeController.getRecipe)
router.get("/fetch_recipes", foodRecipeController.fetchRecipes)
router.put("/edit_recipe", foodRecipeController.editRecipe)
router.delete("/delete_recipe", foodRecipeController.deleteRecipe)

module.exports = router
