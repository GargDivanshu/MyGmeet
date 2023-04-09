import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({title, children}) => {
  return (
    <div className="w-[500px] max-w-[70%] min-h-[250px] bg-lightblack mt-[100px] rounded-md text-center p-[30px] m-auto">
    <div className="mb-[20px] font-bold text-xl">
         <h1>{title}</h1>
    </div>
    {children}
</div>
  )
}

export default Card