import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({title, children}) => {
  return (
    <div className="w-[500px] max-w-[90%] min-h-[300px] bg-lightblack rounded-md text-center p-[30px] m-auto">
    <div className="mb-[20px] font-bold text-xl">
         <h1>{title}</h1>
    </div>
    {children}
</div>
  )
}

export default Card