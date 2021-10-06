import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
        <li><Link href="/user"><a>User</a></Link></li>
      </ul>
    </header>
  )
}