const messageSuccessTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);


const showMessage = (element) => {
  document.body.appendChild(element);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      element.classList.add('visually-hidden');
    }
  });
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.classList.add('visually-hidden');
  });
};


export {showMessage, messageSuccessTemplate, messageErrorTemplate};

