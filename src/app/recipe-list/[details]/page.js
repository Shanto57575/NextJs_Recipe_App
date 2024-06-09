import ShowRecipeDetails from "@/components/recipe-details"

const fetchSingleRecipe = async (recipeId) => {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
        const results = apiResponse.json()
        return results
    } catch (error) {
        throw new Error(error)
    }
}

const RecipeDetails = async ({ params }) => {
    const foodDetails = await fetchSingleRecipe(params.details)
    console.log(foodDetails)

    return (
        <ShowRecipeDetails foodDetails={foodDetails} />
    )
}

export default RecipeDetails
