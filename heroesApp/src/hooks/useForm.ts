import { ChangeEvent, useState } from "react";

interface FormValues {
    [key: string]: string | number;
}

export const useForm = <T extends FormValues> (initialValues: T) => {
    const [values, SetValues] = useState <T> (initialValues);
    
    const handleChange = (event: ChangeEvent <HTMLInputElement>) => {
        const {value, name} = event.target;
        SetValues({...values,[`${name}`]:value});
    };

    const resetForm = () => {
        SetValues(initialValues);
    };

    return {
        values,
        handleChange,
        resetForm,
    };
};