import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import FoodRecipeHome from "./components/food_recipe_book/FoodRecipeHome";
import FoodRecipeForm from "./components/food_recipe_book/FoodRecipeForm";
import FoodRecipePage from "./components/food_recipe_book/FoodRecipePage";

const AppRoutes = ({ isLoggedIn, setUser }) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) =>
        <Login isLoggedIn={isLoggedIn} setUser={setUser} {...props} />
      }/>
      <Route exact path="/signup" render={(props) =>
        <Signup isLoggedIn={isLoggedIn} setUser={setUser} {...props} />
      }/>
      <Route exact path="/home" render={(props) => 
        <FoodRecipeHome isLoggedIn={isLoggedIn} {...props} />
      }/>
      <Route exact path="/add_recipe" render={(props) => 
        <FoodRecipeForm isLoggedIn={isLoggedIn} {...props} />
      }/>
      <Route exact path="/recipe_page/:recipeId" render={(props) =>
         <FoodRecipePage isLoggedIn={isLoggedIn} {...props} />
      }/>
      <Route exact path="/edit_recipe/:recipeId" render={(props) =>
        <FoodRecipeForm isLoggedIn={isLoggedIn} {...props} />
      }/>
    </Switch>
  )
}

export default AppRoutes;
