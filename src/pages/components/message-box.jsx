import styles from './style.module.css';
import { useEffect, useState } from 'react';

export default function MessageBox({ instance, token }) {
  const [messages, setMessages] = useState();
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const fetchMessages = () => {
    fetch(
      `https://api.green-api.com/waInstance${instance}/receiveNotification/${token}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMessages(result))
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    fetchMessages();
    console.log(messages);
  }, []);
  console.log(messages);

  return (
    <div className={styles.message}>
      <h1 className={styles.message__logo}>Уведомления</h1>
      <div className={styles.message__box}>
        {messages === null ? (
          <p>Нет входящих уведомлений</p>
        ) : (
          <p>{messages?.body?.messageData?.textMessageData?.textMessage}</p>
        )}
      </div>
    </div>
  );
}
