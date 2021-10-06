import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './layout.module.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
