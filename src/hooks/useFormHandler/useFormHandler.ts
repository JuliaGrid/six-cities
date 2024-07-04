import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export function useFormHandler<T>(setFormInfo: Dispatch<SetStateAction<T>>) {
  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  return formHandler;
}
