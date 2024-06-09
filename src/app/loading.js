import { Skeleton } from '@/components/ui/skeleton'

const Loader = () => {
    return (
        <div className='bg-black font-serif'>
            <Skeleton />
            <h1 className='text-5xl flex items-center h-screen justify-center text-sky-500'>Loading.... Please wait!</h1>
        </div>
    )
}

export default Loader
