import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {
    
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-white p-4 rounded-md shadow-custom">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm mb-1">{task.description}</p>
            <hr></hr>
            <button className="bg-blue-600 px-2 py-1 rounded-md mt-4 hover:bg-blue-500 text-white" onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        </div>        
        
    )
}

export default TaskCard;