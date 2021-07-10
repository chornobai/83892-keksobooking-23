const GET_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SEND_URL = 'https://23.javascript.pages.academy/keksobooking';
// --- Получение данных
const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((err) => {
      onFail(`Ошибка загрузки данных: "${err}"`);
    });
};

// --- Отправка данных
const sendData = (onSucces, onFail, body) => {

  fetch(
    SEND_URL,
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
