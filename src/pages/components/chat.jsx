import { useState } from 'react';
import styles from './style.module.css';
//79125431028-1532715878
//1101822472
//c61de01e37ce4fe7bcbc0b12600aef4b09db5dc001d84416bf
export default function Chat({ instance, token }) {
  const [textMessage, setTextMessage] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify({
    chatId: `${phoneNumber}@c.us`,
    message: `${textMessage}`,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const fetchNumber = () => {
    fetch(
      `https://api.green-api.com/waInstance${instance}/sendMessage/${token}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  return (
    <div>
      <h1 className={styles.chat__logo}>Отправить сообщение</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchNumber();
        }}
      >
        <input
          className={styles.chat__input}
          type="number"
          name=""
          id=""
          placeholder="Введите номер без +"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          onChange={(e) => setTextMessage(e.target.value)}
          className={styles.chat__textarea}
          name=""
          id=""
          placeholder="Введите текст сообщения"
        ></textarea>
        <input
          className={styles.chat__submit}
          type="submit"
          value="Отправить"
        />
      </form>
    </div>
  );
}
//prototype - это тот объект родительского класса
//proto - ссылается на prototype класса

//catch, then finnaly

//сначала все синхронные операции
//micro - async fetch
//macro - settimeout setinterval eventListener
// после микро и макро происходит рендер, влиять нельзя

//переносит задачи в стек вызовов, если остались микрозадачи, то переносит в стек вызовов, прогоняет и выполняет и заново

//bind call aply
