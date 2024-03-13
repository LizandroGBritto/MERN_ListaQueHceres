import '../App.css';

const Tareas = ({ tarea, eliminarTarea, marcarHecho }) => {
    const handleDelete = (index) => {
        eliminarTarea(index);
    };

    return (
        <div>
            <ul>
                {tarea.map((tarea, index) => {
                    return (
                        <li key={index} className={tarea.hecho ? "hecho" : ""}>
                            <p></p>{tarea.tarea} 
                            <input 
                                type="checkbox" 
                                checked={tarea.hecho} 
                                onChange={() => marcarHecho(index)}
                            />
                            <button onClick={() => handleDelete(index)}>Borrar</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Tareas;