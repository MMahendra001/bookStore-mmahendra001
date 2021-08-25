import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // Whenever the initial values what we passed in will change it will trigger this and set our inputs values with updated one.
    // similar to lifecycle method  like componetDidUpdate in class based function.
    setInputs(initial);
    // eslint-disable-next-line
  }, [initialValues]);

  // this is what it looks like :: sometimes this is what we are passing as
  // it's initial when we use this useForm custom hook somewhere.
  //   {
  //     title: 'Book Title',
  //     author: 'Name',
  //     category: 'category',
  //     ratings: 3.9,
  //     price: 3000,
  //     desc: 'Details of books goes here.',
  //   }

  // we might need some methods and handlers to deal with form after we are done with it.
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number' && value === 'NaN') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      // eslint-disable-next-line
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
