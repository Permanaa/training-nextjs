import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './layout.module.css'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
