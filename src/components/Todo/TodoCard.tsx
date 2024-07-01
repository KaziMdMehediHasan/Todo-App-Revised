import { useAppDispatch } from "@/redux/hooks";
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { updateStatus } from "@/redux/Features/TodoSlice";

type TProps = {
    id: string;
    title: string;
    description: string;
    priority: string;
    isCompleted: boolean;
}
const TodoCard = ({ id, title, description, priority, isCompleted }: TProps) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className='flex justify-between w-full border p-3 rounded-lg'>
                <p className='font-semibold'>{title}</p>
                <p className='font-semibold'>{description}</p>
                <p className={`font-semibold ${isCompleted ? 'text-green-400' : 'text-orange-300'}`}>{isCompleted ? 'Done' : 'Pending'}</p>
                <p className={`font-semibold ${priority === 'high' ? 'text-red-500' : priority === 'medium' ? 'text-orange-300' : 'text-green-400'}`}>{priority}</p>
                {/* <input>Complete</input> */}
                <div className="flex items-center font-semibold space-x-2">
                    <Label htmlFor="changeStatus" className='text-base'>Complete</Label>
                    <Checkbox id="changeStatus"
                        onCheckedChange={(value) => dispatch(updateStatus({ id, value }))}
                        defaultChecked={isCompleted}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoCard