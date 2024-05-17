import Links from '@/components/navbar/links/Links'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <Link href="/" className="font-bold text-3xl">
        Logo
      </Link>
     <div>
       <Links />
      </div>
    </div>
  )
}

export default Navbar