import { LuSearch } from 'react-icons/lu';

const Search = () => {
    return (
        <div className='bg-white h-10 -bottom-5 min-w-3  absolute sm:min-w-96 rounded-full shadow-lg dark:bg-my-black-800 dark:border dark:border-zinc-500'>
            <span className='relative h-full'>
                <LuSearch className='absolute -translate-y-2/4 top-2/4 left-4 text-my-black-500 ' 
                    size={20}
                />
                <input type="text" className='text-sm h-full w-full text-my-black-500 bg-transparent text-center outline-none pl-12 pr-4 dark:text-my-black-400 dark:placeholder:text-my-black-400'
                    placeholder='Busque pelas suas notas...'
                />
            </span>
        </div>
    );
}


export default Search;