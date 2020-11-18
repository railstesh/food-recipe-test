import axios from "axios"
const api = `http://www.localhost:5000/api`

export const loginUser = (user) => {
  return axios.post(`${api}/user/login`, user)
		.then((res) => {
			if (res.status === 200) {
        return { success: true }
			} else {
				return { success: false }
			}
		})
		.catch((error) => {
			console.log('Login error', error)
		})
}

export const signupUser = (user) => {
  return axios.post(`${api}/user/signup`, user)
		.then((res) => {
			if (res.status === 201) {
        return { success: true }
			}
		})
		.catch((error) => {
			console.log('Signup error', error)
		})
}

export const addFoodRecipes = (recipe) => {
  return axios.post(`${api}/add_recipe`, recipe)
		.then((res) => {
			if (res.status === 200) {
        return { success: true }
			}
		})
		.catch((error) => {
			console.log('recipes add error', error)
		})
}