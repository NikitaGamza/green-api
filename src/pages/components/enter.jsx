import styles from './style.module.css';
export default function Enter({ onChangeInstance, onChangeToken, onSubmit }) {
  return (
    <div>
      <h1 className={styles.enter__logo}>Вход</h1>
      <form action="" onSubmit={onSubmit} className={styles.enter__form}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Ваш инстанс"
          className={styles.enter__input}
          required
          onChange={(e) => onChangeInstance(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Ваш токен"
          className={styles.enter__input}
          required
          onChange={(e) => onChangeToken(e.target.value)}
        />
        <input type="submit" value="Войти" className={styles.enter__submit} />
      </form>
    </div>
  );
}
