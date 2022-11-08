import Head from 'next/head'
import Image from 'next/image'
import SecondNav from '../components/secondNav'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casino</title>
        <meta name="description" content="casino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondNav />
      <Dashboard />
    </div>
  )
}
