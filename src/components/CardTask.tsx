import { Clock, Maximize2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns'
import { ptBR, pt } from 'date-fns/locale'

interface ICardInfo {
    note: {
        title: string,
        content: string,
        tags: Array<string>,
        createdAt: string
    }
    
}

const CardTask = ({ note }: ICardInfo) => {

    const tags = typeof note.tags != 'string' ? note.tags : []

    return (

        <article className='mx-auto w-full mb-4  sm:flex-1  bg-white shadow-lg rounded sm:basis-80 dark:bg-my-black-800' >
            <div className="group h-full justify-between  p-5 flex flex-col gap-4">
                <div>
                    <header className='flex items-center justify-between dark:text-my-black-300 mb-2'>
                        <div className='font-medium'>
                            {note.title}
                        </div>

                        <div className='hover:cursor-pointer hover:bg-my-black-300  p-2 rounded-full dark:hover:bg-zinc-800'>
                            <Maximize2 className='text-my-black-500 opacity-0 group-hover:opacity-100 dark:text-zinc-400' size={17}/>
                        </div>
                    </header>

                    <p className='text-sm text-my-black-500 dark:text-my-black-400'>
                        {note.content}
                    </p>
                </div>
               

                <footer className='flex justify-between text-xs items-start flex-wrap space-y-0 gap-x-2'>
                    <div className='flex gap-2 flex-1 flex-wrap mb-4'>

                        {tags.map(t => (
                            <span key={t} className='bg-my-blue-500 grid place-items-center p-2 rounded-sm dark:bg-zinc-800 dark:text-my-black-300'>
                                {t}
                            </span>
                        ) )}
                        
                    </div>

                    <div className='flex justify-end gap-2 text-my-black-500 min-w-36 relative top-2'>
                        <Clock size={17}/>

                        <span className='first-letter:uppercase dark:text-my-black-300'>
                            {formatDistanceToNow(note.createdAt, {locale: ptBR||pt, addSuffix: true})}
                        </span>
                    </div>
                </footer>
            </div>
        </article>

    );

}


export default CardTask;