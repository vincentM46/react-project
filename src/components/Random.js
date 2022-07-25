import { useState, useEffect } from 'react';
import { randomRecipe } from '../services/Constants';



function Random(props) {
    const [recipe, setRecipe] = useState("")
    const [image, setImage] = useState("")
    const [steps, setSteps] = useState("")
    const [recipeURL, setRecipeURL] = useState("")



    async function handleClick() {
        const food = await randomRecipe()
        console.log(food)
        const foodTitle = (food.data.recipes[0].title)
        const foodImage = (food.data.recipes[0].image)
        const foodSteps = (food.data.recipes[0].instructions)
        const recipeURL = (food.data.recipes[0].sourceUrl)
        setRecipe(foodTitle)
        setImage(foodImage)
        setSteps(foodSteps)
        setRecipeURL(recipeURL)
    }

    useEffect(() => {
        handleClick();
    }, [])


    return(
        <div>
            <h1>Random Recipes!</h1>
            <button onClick={() => handleClick()}>Click for a random recipe to explore!</button>
            <p className="recipeTitle">{recipe}</p>
            <a href={recipeURL}><img src={image} alt="recipe"/></a>
            <p className="imageDesc">Here's a preview of the process to make this random recipe! Click the image to see the full recipe!</p>
            <p className="steps">{steps}</p>
        </div>
    )
};

export default Random;