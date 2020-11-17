import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import FoodRecipeHome from "./components/food_recipe_book/FoodRecipeHome";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={FoodRecipeHome} />
      </Switch>
    </>
  );
};

export default AppRoutes;
