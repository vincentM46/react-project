import axios from 'axios';

export async function randomRecipe() {
    // const API_KEY = (process.env.REACT_APP_API_KEY)
    // const baseURL = (`https://api.spoonacular.com/reipces/random?apiKey=`)
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=2f686169d2f646ccbca2eb06615c6be3`)
    // const response = await axios.get(`${baseURL}${key}`)
    return response
};