import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Button = ({text, onClick}) => {
  return (
    <button
    onClick={onClick}
        className="flex rounded-2xl transition duration-300 ease-in-out border-[2px] my-2 text-twitterBlue border-twitterBlue px-[20px] py-[10px] font-bold hover:text-white hover:bg-twitterBlue mx-auto"
        >
        <span>{text}</span>
        <AiOutlineArrowRight
            fontSize={25}
            className="mx-2"
        />
        </button>
  )
}

export default Button