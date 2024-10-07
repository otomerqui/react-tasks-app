import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
       
        createTask({
            title,
            description
        });
        setTitle('');
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-white p-10 mb-10 shadow-custom rounded-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-3 text-center">Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-blue-100 p-3 w-full mb-4 rounded-sm"
                    autoFocus      
                />
                <textarea placeholder="Escribe la descripción de la tarea"
                   onChange={(e) => setDescription(e.target.value)} 
                   value={description}
                   className="bg-blue-100 p-3 w-full mb-2 rounded-md"
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar tarea</button>
             </form>
        </div>
      
    )
}

export default TaskForm