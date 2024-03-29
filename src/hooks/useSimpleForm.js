import { useState } from 'react';



export const useSimpleForm = (initialState = {}) => {

    const [formValue, setFormValue] = useState(initialState);

    const handleInputChange = ({ name , value }) => {
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const reset = () => {
        setFormValue(initialState);
    }

    return {
        formValue,
        setFormValue,
        handleInputChange,
        reset
    };
}


