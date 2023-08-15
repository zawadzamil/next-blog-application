import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex space-x-6 my-4 mx-16'>
        <div> <Link href= "/"> Home</Link> </div>
        <div><Link href= "/blog">Blogs</Link></div>

    </nav>
  )
}
