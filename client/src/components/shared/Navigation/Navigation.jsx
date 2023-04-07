import React from 'react'
import {Link} from 'react-router-dom'


const Navigation = () => {
  return (
    <nav 
    className="w-[1200px] max-w-11/12 mx-auto px-[20px] py-[10px] font-bold"
    >
        <Link to="/">
            Blithe - WebRTC
        </Link>
    </nav>
  )
}

export default Navigation