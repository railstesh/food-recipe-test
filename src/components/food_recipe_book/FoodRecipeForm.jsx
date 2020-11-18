import React, { Component } from 'react'
import { addFoodRecipes } from '../../apiServices';
import { Redirect } from 'react-router';

class FoodRecipeForm extends Component {
  state = {
    recipeName: '',
    recipeType: 'veg',
    recipeDescription: '',
    ingredient: '',
    recipeIngredients: [],
    recipeDirections: [],
    error: '',
    ingredientsError: '',
    addedSuccessfully: false
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      error: "",
      ingredientsError: "",
    });
  };

  handleRadioChange = ({ target: { value } }) => {
    this.setState({ recipeType: value })
  }

  handleIngredients = (event) => {
    event.preventDefault();
    const { recipeIngredients, ingredient } = this.state
    const recipeIngredientsRef = recipeIngredients
    if (ingredient !== "") {
      recipeIngredientsRef.push(ingredient)
      this.setState({ recipeIngredients: recipeIngredientsRef, ingredient: '' })
    } else {
      this.setState({ ingredientsError: "please add ingredient" })
    }
  }

  handleDeleteIngredient = (item) => {
    const { recipeIngredients } = this.state
    const recipeIngredientsRef = recipeIngredients
    const recipe = recipeIngredientsRef.filter((element) => element !== item)
    this.setState({ recipeIngredients: recipe })
  }

  handleSubmit = (event) => {
    const { recipeName, recipeDescription, recipeType, recipeIngredients } = this.state

    event.preventDefault();
    let recipeUniqueId = Math.random().toString(36).substr(2, 9)
    const recipe = {
      recipeDescription: recipeDescription,
      recipeIngredients: recipeIngredients,
      recipeId: recipeUniqueId,
      recipeType: recipeType,
      recipeName: recipeName,
    }
    if (recipeName !== "" && recipeDescription !== "") {
      addFoodRecipes(recipe).then((res) => {
        if (res && res.success) {
          this.setState({
            recipeDescription: "",
            recipeIngredients: [], recipeType: '', recipeName: '',
            addedSuccessfully: true
          })
        }
      })
    } else {
      this.setState({ error: "fileds required" })
    }
  }

  render() {
    const { recipeName, recipeType, ingredient, addedSuccessfully,
      recipeDescription, recipeIngredients, error, ingredientsError
    } = this.state

    return (
      <>
        {addedSuccessfully && <Redirect to={`/home`} />}
        <h1 className="text-center mt-3">Add New Recipe</h1>
        <div className="row m-0">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row pt-5">
              <div className="form-group col-md-12">
                <label>Recipe Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipeName"
                  value={recipeName}
                  name="recipeName"
                  placeholder="Cheesy Bacon Spinach Dip"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Recipe Type</label>
                <div>
                  <input
                    type="radio"
                    value="veg"
                    checked={recipeType === "veg"}
                    onChange={this.handleRadioChange}
                  />
                  <label className="pl-2">Veg</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="non-veg"
                    checked={recipeType === "non-veg"}
                    onChange={this.handleRadioChange}
                  />
                  <label className="pl-2">Non-Veg</label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label>Recipe Description</label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="recipeDescription"
                  value={recipeDescription}
                  name="recipeDescription"
                  placeholder="good food recipe"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Ingredients List</label>
                {recipeIngredients.map((item, i) => (
                  <ul key={i}>
                    <li>
                      {item}
                      <i onClick={() => this.handleDeleteIngredient(item)}
                        className="ml-3 fas fa-minus-circle">
                      </i>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="form-group col-md-6">
                <label>Add Ingredients</label>
                <div className="row">
                  <div className="col-10">
                    <input
                      type="text"
                      className="form-control"
                      id="ingredient"
                      value={ingredient}
                      name="ingredient"
                      placeholder="1 cup water"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-2">
                    <button className="btn btn-sm btn-primary"
                      onClick={this.handleIngredients}>
                      <i className='fal fa-plus' />
                    </button>
                  </div>
                  {ingredientsError && <div className="ml-5 ">
                    <p className="text-danger">{ingredientsError}</p></div>
                  }
                </div>
                {error && <div className="ml-4 mt-2">
                  <p className="text-danger">{error}</p></div>
                }
              </div>
            </div>
            <div className="form-group row ">
              <div className="col text-right mt-5">
                <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>
                  Create Recipe
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </>
    )
  }
}
export default FoodRecipeForm