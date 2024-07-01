import { useAppSelector } from "@/redux/hooks";
import { Radio } from "./Radio"
import TodoCard from "./TodoCard"
import { TodoModal } from "./TodoModal"
import { useState } from "react";

const TodoContainer = () => {
    const gradientClass = 'bg-gradient-to-r from-starting-color to-ending-color';
    let todos = useAppSelector(state => state.todos.todos);
    const [priorityFilter, setPriorityFilter] = useState('default');

    //^ filtering data according to their priority
    if (priorityFilter !== 'default') {
        todos = todos.filter((todo) => todo.priority === priorityFilter);
    }
    return (
        <div className="flex items-center flex-col p-10 gap-5">
            <h1 className="text-5xl font-semibold">Simple Todo Application</h1>
            <div className='w-3/5 flex justify-between'>
                <TodoModal gradient={gradientClass} />
                <Radio gradient={gradientClass} priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
            </div>
            {/* //~ Main gradient background */}
            < div className={`${gradientClass} h-auto w-3/5 rounded-2xl p-2`}>
                {/* //~ the white container background */}
                <div className=' bg-white rounded-lg p-2 flex flex-col justify-between gap-2'>
                    {/* //~ task field headings */}
                    <div className='flex justify-between w-full p-3 border rounded-lg'>
                        <p className='font-bold'>Title</p>
                        <p className='font-bold'>Description</p>
                        <p className='font-bold'>Status</p>
                        <p className='font-bold'>Priority</p>
                        <p className='font-bold'>Toggle Status</p>
                    </div>
                    {/* //~ task details from card */}
                    {
                        todos.map((todo) => <TodoCard {...todo} key={todo.id} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default TodoContainer