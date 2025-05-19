import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState,setFormState] = useState(initialForm);

    /**
     * Maneja los eventos de cambio de entrada y actualiza el estado del formulario.
     * 
     * @param {Object} event - El objeto del evento del cambio de entrada.
     * @param {Object} event.target - El elemento objetivo del evento.
     * @param {string} event.target.name - El atributo name del elemento de entrada.
     * @param {string} event.target.value - El valor del elemento de entrada.
     */
    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        }); 
    }

    //Restablecemos campos vacios
    /**
     * Restablece el estado del formulario a su estado inicial.
     */
     // Se puede usar para limpiar el formulario
    const onResetForm = () => setFormState(initialForm); 

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
