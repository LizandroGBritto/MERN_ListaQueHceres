import '../App.css';
import { useState } from 'react'
import Tareas from './Tareas'

const AgregarTarea = ({ agregarTarea }) => {
    const [tarea, setTarea] = useState([]);
    const [tareas, setTareas] = useState({tarea: '', hecho: false});

    const handleChange = (e) => {
        setTareas({...tareas, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTarea([...tarea, tareas]);
        setTareas({tarea: '', hecho: false});
    }

    const eliminarTarea = (index) => {
        const nuevaListaTareas = tarea.filter((_, i) => i !== index);
        setTarea(nuevaListaTareas);
    };

    const marcarHecho = (index) => {
        const nuevaListaTareas = tarea.map((t, i) => {
            if (i === index) {
                return {
                    ...t,
                    hecho: !t.hecho 
                };
            }
            return t;
        });
        setTarea(nuevaListaTareas);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <label htmlFor="Tarea">Ingrese Una Nueva Tarea</label>
            <hr/>
            <input type="text" name="tarea" id="tarea" value={tareas.tarea} onChange={handleChange} />
            <input type="submit" value='Agregar' />
        </form> 
            <Tareas tarea={tarea} eliminarTarea={eliminarTarea} marcarHecho={marcarHecho} />
        </div>
        
    )
}
export default AgregarTarea;