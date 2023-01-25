import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Context from '../contexts/Context'
import { useState } from 'react';


export default function App({ Component, pageProps }: AppProps) {

  const[open, setOpen] = useState(true)

  return (
    <div className='contents'>
      <Context.Provider value={ {open, setOpen }}>
        <Component {...pageProps} />
      </Context.Provider>
    </div>
  )
}
