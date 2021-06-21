const form = document.querySelectorAll('form');
const formElements = document.querySelectorAll('fieldset');

const formDisabled = () => {
  form.forEach((item) => {
    item.classList.add('ad-form--disabled');
  });
  formElements.forEach((item) => {
    item.setAttribute('disabled', 'disabled');
  });
};


const formActive = () => {
  form.forEach((item) => {
    item.classList.remove('ad-form--disabled');
  });
  formElements.forEach((item) => {
    item.removeAttribute('disabled');
  });
};

export {formDisabled, formActive};
