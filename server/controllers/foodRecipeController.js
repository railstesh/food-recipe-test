const HttpResponse = require("../models/http-response");
const Recipe = require("../models/foodRecipeModel");

//========add Recipe ===============================================================

const addRecipe = async (req, res, next) => {
  console.log(req.body);
  const {
    recipeName,
    recipeId,
    recipeType,
    recipeAuthorName,
    recipeDescription,
    recipeIngredients,
    recipeDirections,
  } = req.body;

  const createdRecipe = new Recipe({
    recipeName,
    recipeId,
    recipeType,
    recipeAuthorName,
    recipeDescription,
    recipeIngredients,
    recipeDirections,
  });

  try {
    const addRecipe = await createdRecipe.save();
    res.send({ addRecipe: addRecipe, success: true });
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }

  return res.status(201).json({
    recipeName,
    recipeId,
  });
};

// fetchRecipe=====================================================================

const fetchRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({}).sort({ createdAt: -1 });
    return res.send({ recipes: recipes, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

// getRecipe=====================================================================

const getRecipe = async (req, res) => {
  const { recipeId } = req.body;
  console.log("MEMMMEMEMEME", recipeId);
  try {
    const recipe = await Recipe.findOne({ recipeId: recipeId });
    return res.send({ recipe: recipe, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const editRecipe = async (req, res) => {
  const { recipeId } = req.body;
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { recipeId: recipeId },
      req.body
    );
    return res.send({
      success: true,
      updatedRecipe: updatedRecipe,
    });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const deleteRecipe = async (req, res) => {
  const { recipeId } = req.body;
  try {
    const deletedRecipe = await Recipe.findOneAndDelete({ recipeId: recipeId });
    return res.send({
      success: true,
      deletedRecipe: deletedRecipe,
    });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

exports.addRecipe = addRecipe;
exports.editRecipe = editRecipe;
exports.fetchRecipes = fetchRecipes;
exports.getRecipe = getRecipe;
exports.deleteRecipe = deleteRecipe;