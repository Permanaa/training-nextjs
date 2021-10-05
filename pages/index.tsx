import type { NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/user"><a>User</a></Link></li>
        </ul>
      </header>
      <h1>Welcome Home!</h1>
    </>
  )
}

export default Home
