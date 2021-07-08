// --- Получение данных
const getData = (onSucces, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      onSucces(ads);
    })
    .catch(() => {
      onFail();
    });
};

// --- Отправка данных
const sendData = (onSucces, onFail, body) => {

  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSucces();
      }else{
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData};
