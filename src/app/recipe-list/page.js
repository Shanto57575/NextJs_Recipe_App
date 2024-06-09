import RecipeList from "@/components/recipe-list"

const showRecipes = async () => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const results = await apiResponse.json()
        return results.recipes
    } catch (error) {
        throw new Error(error)
    }
}
const Recipes = async () => {
    const recipeList = await showRecipes()

    return (
        <div>
            <RecipeList recipeList={recipeList} />
        </div>
    )
}

export default Recipes
