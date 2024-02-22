import taskList from "../services/getDataNotes";
import CardTask from "./CardTask";
import ButtonAndModalCreate from "./buttonAndModalCreate";
// import { Plus } from 'lucide-react';

type listType = {
    title: string,
    content: string,
    tags: Array<string>,
    createdAt: string
};

const Hero = () => {

    const listTasks:listType[] = Array.isArray(taskList()) && taskList()

    console.log(listTasks)

    return (
        <section className="">

            <ButtonAndModalCreate />

            <div className="my-container flex flex-wrap sm:flex sm:flex-wrap sm:gap-4">

                {listTasks &&  (

                    listTasks.map(task => (
                        <CardTask key={task?.title} note={task} />
                    ))

                ) || (
                    <p className="text-zinc-800 text-lg mx-auto dark:text-zinc-300">
                        Sem notas
                    </p>
                )}
                
        

            </div>
        </section>
    );
}   


export default Hero;