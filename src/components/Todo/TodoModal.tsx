import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTodo } from "@/redux/Features/TodoSlice";

type Gradient = {
    gradient: string
}

export type TTask = {
    id: string;
    title: string;
    description: string;
    priority: string;
    isCompleted: boolean;
}

export function TodoModal({ gradient }: Gradient) {

    const initialState: TTask = {
        id: '',
        title: '',
        description: '',
        priority: '',
        isCompleted: false,
    }

    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.todos);
    console.log('From redux store', todos);
    const [currentTask, setCurrentTask] = useState(initialState);
    const id = Math.random().toString(36).substring(2);
    //^ for closing the dialog the following state is used
    const [open, setOpen] = useState(false);
    console.log('From event change', currentTask);

    const handleSubmit = () => {
        console.log('After submit button clicked', currentTask);
        setOpen(false);
        dispatch(addTodo(currentTask));
        setCurrentTask(initialState);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className={`text-sm ${gradient}`}>Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add a new task</DialogTitle>
                    <DialogDescription>
                        Fill out the form with the information of your task. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {/* //~ title field */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            className="col-span-3"
                            onBlur={(e) => setCurrentTask({ ...currentTask, title: e.target.value, id: id })}
                        />
                    </div>
                    {/* //~ title field ends*/}
                    {/* //~ description field */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            id="description"
                            className="col-span-3"
                            onBlur={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                        />
                    </div>
                    {/* //~ description field ends*/}
                    {/* //~ priority field */}
                    <div className="grid grid-cols-4 items-center justify-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Pick priority
                        </Label>
                        <Select onValueChange={(value) => setCurrentTask({ ...currentTask, priority: value })}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a priority level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Priority</SelectLabel>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* //~ priority field ends*/}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Save Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
