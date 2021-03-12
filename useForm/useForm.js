import { useState } from "react";


// CUSTOM HOOK QUE SE ENCARGA DE MANEJAR LA LOGICA DE LOS FORMULARIOS
export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    // MANEJADOR DE CAMBIOS EN EL INPUT
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [values, handleInputChange, reset];
}
