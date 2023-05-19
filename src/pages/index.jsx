import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Chat from './components/chat';
import MessageBox from './components/message-box';
import { useEffect, useState } from 'react';
import Enter from './components/enter';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [enter, setEnter] = useState(false);
  const [instance, setInstance] = useState();
  const [token, setToken] = useState();
  function getEnter() {}
  return (
    <>
      {enter ? (
        <div className={styles.row__spacebetween}>
          <Chat instance={instance} token={token} />{' '}
          <MessageBox instance={instance} token={token} />
        </div>
      ) : (
        <div className={styles.enter}>
          <Enter
            onChangeInstance={setInstance}
            onChangeToken={setToken}
            onSubmit={() => setEnter(true)}
          />
        </div>
      )}
    </>
  );
}

//token and instance!!!!!!!!!!!!!!!!???????????????
