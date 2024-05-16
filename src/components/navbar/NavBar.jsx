import React from 'react'
import Links from '@/components/navbar/links/Links'

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div>
        logo
      </div>
      <div className="flex gap-3">
       <Links />
      </div>
    </div>
  )
}

export default Navbar