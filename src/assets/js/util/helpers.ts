/**
 * Basic form handler that takes the name and value of any form input to map
 * to whatever form is built.
 * @param event
 * @returns object
 */
export const handleForm = (event: any): any => {
  const { target } = event;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const { name } = target;
  const formObj = {
    [name]: value,
  };

  return formObj;
};

export default {
  handleForm,
};
