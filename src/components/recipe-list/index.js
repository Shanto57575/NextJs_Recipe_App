import Link from 'next/link'
import React from 'react'

const RecipeList = ({ recipeList }) => {
    console.log(recipeList)
    return (
        <div className='mx-3 lg:mx-0'>
            <h1 className='text-center text-4xl font-serif my-5'>RecipeList</h1>
            <Link href={'/'}><button className='px-5 py-2.5 text-sm mb-4 font-serif rounded-md bg-black text-cyan-400 hover:bg-white hover:border hover:text-black border-black duration-500'>{`Back to Home`}</button></Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {recipeList && recipeList.length > 0 ? recipeList.map(recipe => <div className='rounded border hover:scale-110 duration-500 bg-black'>
                    <img src={recipe?.image} alt={recipe.name} />
                    <article className='flex items-center justify-between text-cyan-400 font-serif my-3 px-2 font-bold text-sm md:text-lg'>
                        <h1>{recipe.name.slice(0, 10)}</h1>
                        <h4>{recipe.cuisine}</h4>
                    </article>
                    <Link href={`/recipe-list/${recipe.id}`}>
                        <button className='bg-black w-full text-cyan-400 border-t-2 px-5 py-2.5 text-sm font-serif hover:tracking-widest duration-500'>View Details</button>
                    </Link>
                </div>) : null}
            </div>
        </div>
    )
}

export default RecipeList
