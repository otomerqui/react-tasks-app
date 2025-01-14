import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
        
    const {tasks} = useContext(TaskContext)

    if(tasks.length === 0) {
        return <h1 className="text-4xl font-bold text-center">No hay tareas aún</h1>
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        
        </div>
    )
}

export default TaskList