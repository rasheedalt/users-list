import React from 'react'

const Avatar = ({imageUrl, name, verified}) => {
  return (
    imageUrl ?
    <img src={imageUrl} class={`w-[35px] h-[35px] rounded-full border-2 border-${verified ? "green-500" : "red-900" }`} alt="Avatar"/> :
    <div className={`relative w-[35px] h-[35px] inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border-2 border-${verified ? "green-500" : "red-900" }`}>
        <span class="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
    </div>
  )
}

export default Avatar;
