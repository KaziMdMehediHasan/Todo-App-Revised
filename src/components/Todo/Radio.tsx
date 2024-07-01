import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"

type TProps = {
    gradient: string,
    priorityFilter: string;
    setPriorityFilter: React.Dispatch<React.SetStateAction<string>>
}

export function Radio({ gradient, priorityFilter, setPriorityFilter }: TProps) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className={`text-sm ${gradient}`}>Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={priorityFilter} onValueChange={setPriorityFilter}>
                    <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
