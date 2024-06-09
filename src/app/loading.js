import { Skeleton } from '@/components/ui/skeleton'

const Loader = () => {
    return (
        <div>
            <Skeleton />
            <h1 className='text-3xl flex items-center h-screen justify-center text-sky-400'>Loading the recipes....Please wait!</h1>
        </div>
    )
}

export default Loader
