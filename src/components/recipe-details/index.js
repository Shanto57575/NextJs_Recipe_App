import Link from 'next/link'
import { Badge } from '../ui/badge'

const ShowRecipeDetails = ({ foodDetails }) => {
    return (
        <section className="md:max-w-6xl mx-auto">
            <h1 className="text-3xl my-5 font-bold font-serif text-zinc-800 text-center"> {foodDetails.name} Details</h1>
            <Link href={'/recipe-list'}><button className='px-5 py-2.5 text-sm mb-4 font-serif rounded-md bg-black text-cyan-400 hover:bg-white hover:border hover:text-black border-black duration-500'>Back To Recipes</button></Link>
            <article className="lg:flex gap-9">
                <figure className="h-full w-full md:h-96 md:w-96">
                    <img src={foodDetails.image} alt="" />
                </figure>
                <section>
                    <h1 className="font-black text-xl font-serif mb-2">{foodDetails.name}</h1>
                    <ul className="flex gap-x-1 mb-3">
                        <Badge className="px-2 py-1">{foodDetails.tags[0]}</Badge>
                        <Badge className="px-2 py-1">{foodDetails.tags[1]}</Badge>
                    </ul>
                    <ul>
                        {
                            foodDetails.ingredients.map((item, idx) => <li key={idx} className="text-md font-serif">{idx + 1}. {item}</li>)
                        }
                    </ul>
                    <p className="font-serif text-sm my-4">{foodDetails.instructions[0]}</p>
                </section>
            </article>
        </section>
    )
}

export default ShowRecipeDetails
