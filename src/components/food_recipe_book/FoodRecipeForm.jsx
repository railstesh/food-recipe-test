import React, { Component } from 'react'
import { addFoodRecipes } from '../../apiServices';

class FoodRecipeForm extends Component {
  state = {
    recipeName: '',
    recipeAuthorName: '',
    recipeType: '',
    recipeDescription: '',
    error: '',
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  handleRadioChange = ({ target: { value } }) => {
    this.setState({ recipeType: value })
  }

  handleSubmit = (event) => {
    const { recipeAuthorName, recipeName,
      recipeDescription, recipeType } = this.state

    event.preventDefault();
    let recipeUniqueId = Math.random().toString(36).substr(2, 9)
    const recipe = {
      recipeAuthorName: recipeAuthorName,
      recipeDescription: recipeDescription,
      recipeId: recipeUniqueId,
      recipeType: recipeType,
      recipeName: recipeName,
    }
    console.log(recipe)
    addFoodRecipes(recipe).then((res) => {
      debugger
      if (res && res.success) {
        this.setState({ recipeDescription: "" })
      } else {
        this.setState({ error: "something wrong" })
      }
    })
  }

  render() {
    const { recipeAuthorName, recipeName, recipeType,
      recipeDescription } = this.state

    return (
      <>
        <h1 className="text-center mt-3">Add New Recipe Form</h1>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row pt-5">
              <div className="form-group col-md-6">
                <label>Food Recipe Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipeName"
                  value={recipeName}
                  name="recipeName"
                  placeholder="zxcvf"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Recipe Author Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipeAuthorName"
                  value={recipeAuthorName}
                  name="recipeAuthorName"
                  placeholder="Werty kio"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Food Recipe Type</label>
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
                  placeholder="Werty kio"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row ">
              <div className="col text-center">
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