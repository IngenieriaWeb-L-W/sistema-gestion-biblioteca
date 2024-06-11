import { useState } from "react";

export interface SimpleInputChangeEvent<T> {
  target: {
    name: string;
    value: T;
  };
}

export interface SimpleSelectChangeEvent<T> {
  target: {
    name: string;
    value: T;
  };
}

export interface SimpleCheckboxChangeEvent {
  target: {
    name: string;
    checked: boolean;
  };
}

export interface FormValue<T> {
  formValues: T;
  handleInputChange: <T>(event: SimpleInputChangeEvent<T>) => void;
  handleSelectChange: <T>(event: SimpleSelectChangeEvent<T>) => void;
  resetForm: (state: T) => void;
}

export const useForm = <T>(initialState: T): FormValue<T> => {
  const [formValues, setFormValues] = useState<T>(initialState);

  const handleInputChange = <T>(event: SimpleInputChangeEvent<T>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = <T>(event: SimpleSelectChangeEvent<T>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = (state: T) => {
    setFormValues(state);
  };

  return {
    formValues,
    handleInputChange,
    handleSelectChange,
    resetForm,
  };
};
