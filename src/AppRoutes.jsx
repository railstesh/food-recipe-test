import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import FoodRecipeHome from "./components/food_recipe_book/FoodRecipeHome";
import FoodRecipeForm from "./components/food_recipe_book/FoodRecipeForm";
import FoodRecipePage from "./components/food_recipe_book/FoodRecipePage";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={FoodRecipeHome} />
        <Route exact path="/recipe_form" component={FoodRecipeForm} />
        <Route exact path="/recipe_page/:recipeId" component={FoodRecipePage} />
      </Switch>
    </>
  );
};

export default AppRoutes;
