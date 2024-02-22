import * as Dialog from '@radix-ui/react-dialog';
import { Plus, Pencil, X } from 'lucide-react';
import React from 'react';


type TypeFormNote = {
        title: string,
        content: string,
        tags: Array<string>,
        createdAt: string
}


const Button = () => {

    const resetInputs:TypeFormNote = {
        title: '',
        content: '',
        tags: [],
        createdAt: new Date().toISOString()
    }

    const [inputTag, setInputTag] = React.useState('');
    const [formNote, setFormNote] = React.useState(resetInputs)
    const [openModal, setOpenModal] = React.useState<true|false>(false);


    function hadleKeyUpTags(e: React.KeyboardEvent){

        if(e.key == 'Enter'){

            const ifTagExists = formNote.tags.map(v => v == inputTag);


            if(!ifTagExists.includes(true) && inputTag != '') {
                setFormNote({
                    ...formNote,
                    tags: [...formNote.tags, inputTag]
                })

                setInputTag('')
            }

        }
    }   

    function hadleDeleteTag(e: React.BaseSyntheticEvent){


            
            const value = e.target.parentElement.getAttribute('data-value') || ''
        
            const newTags = formNote.tags.filter(t => value !== t);

            setFormNote({
                        ...formNote,
                        tags: newTags
            })

        
    }

    function hadleFormNote(e: React.BaseSyntheticEvent){
        const id = e.target.id;
        const value = e.target.value;

        setFormNote({
            ...formNote,
            [id]: value
        })
    }

    function hadleSubmitFormNote(e: React.MouseEvent){
        
        e.preventDefault()

        if(formNote.title == '' || formNote.content == '') {
            return false
        };

        const currentTime = new Date().toISOString()

        setFormNote({...formNote, createdAt: currentTime})

        const listSaved = window.localStorage.getItem('list-task-note') || '[]'

        const JsonListSaved = JSON.parse(listSaved) 
        

        const listSaving = [...JsonListSaved, formNote]
    
        window.localStorage.setItem('list-task-note', JSON.stringify(listSaving))

        setFormNote(resetInputs)

        setOpenModal(false)
    }

    return (
        <>
            <Dialog.Root open={openModal} onOpenChange={((value) => setOpenModal(!value))}>
                 
                <div className='grid place-items-center'>
                        <div onClick={(() => setOpenModal(true))} className=" bg-my-blue-900 w-10 h-10 grid place-items-center rounded-full text-white dark:bg-zinc-800 dark:hover:bg-zinc-600">
                            <Plus size={20}/>
                        </div>
                </div>
            

                <Dialog.Portal>
                    <Dialog.Overlay onClick={(() => setOpenModal(false))} className='bg-black/70 fixed inset-0 backdrop-blur-[2px]'/>

                    <Dialog.Content className='max-w-[690px] bg-white fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-sm w-4/5 dark:bg-my-black-800'>
                        <div className='px-12 py-8'>
                            
                            <div className='flex justify-end mb-4 cursor-pointer' onClick={(() => setOpenModal(false))}>
                                <X  className='text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400'/>
                            </div>

                            <Dialog.Title className='mb-4'>

                                <textarea 
                                    className='outline-none placeholder:text-my-black-800 font-medium dark:text-zinc-100 dark:placeholder:text-zinc-100 w-full resize-none'
                                    rows={2}
                                    placeholder='Escreva aqui o título da nota...'
                                    id='title'
                                    onChange={hadleFormNote}
                                    value={formNote.title}
                                />

                            </Dialog.Title>

                            <div className='text-sm mb-4'>
                                <div className='relative fle text-my-black-500 mb-2 dark:text-my-black-400'>
                                    <Pencil size={18} className='text-zinc-400 absolute -left-8'/>
                                    Escreva um texto
                                </div>

                                <textarea 
                                    className='outline-none rounded-sm text-my-black-500 border border-my-black-400 min-w-50 w-full min-h-48 max-h-48 h-48 p-4 dark:text-my-black-400'
                                    id='content'
                                    onChange={hadleFormNote}
                                    value={formNote.content}
                                />

                            </div>

                            <div className='text-my-black-500 text-sm dark:text-my-black-400'>
                                <p className='mb-2'>Tags (palavras-chaves)</p>
                               
                                <input type="text" 
                                    className='text-my-black-500 border border-my-black-400 rounded-sm outline-none px-2 py-1  w-full max-w-28 dark:text-zinc-400'
                                    onKeyUp={hadleKeyUpTags}
                                    onChange={(e) => setInputTag(e?.target.value)}
                                    value={inputTag}

                                />

                                <div className='mt-4 flex gap-2 flex-wrap'>
                                    
                                    {formNote.tags.map(t => (
                                        <div key={t} data-value={t} className='bg-my-blue-500 w-fit rounded-md p-2 flex items-center justify-center gap-2 dark:text-my-black-800'>
                                            {t}
                                            
                                            <div onClick={hadleDeleteTag}>
                                                <X  size={18}  className='text-zinc-500 pointer-events-none' />
                                            </div>
                                        </div>
                                    ))}

                                    
                                </div>
                            </div>

                            <div className='flex justify-end mt-4'>
                                <button onClick={hadleSubmitFormNote} className='bg-my-blue-900 text-white py-2 px-4 rounded-sm hover:text-white/80 dark:bg-zinc-800 border border-transparent dark:hover:border-zinc-600'>
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </Dialog.Content>
                    
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default Button;