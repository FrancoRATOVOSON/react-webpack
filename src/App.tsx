import React from 'react'
import styles from './App.module.css'
import Home from './svg/home.svg'

export default function App() {
  return (
    <div className={styles.app}>
      <Home height={24} width={24}/>
      <h1 className={styles.header}>Hello World</h1>
      <p className={styles.p}>That's it</p>
      <h2>Definitely not working</h2>
    </div>
  )
}