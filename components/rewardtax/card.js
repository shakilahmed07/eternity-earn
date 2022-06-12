import Image from 'next/image'
import React from 'react'

const Card = ({title, description, icon}) => {
  return (
    <div className='xl:p-5 mb-4'>
      <div className='pb-[70px] mb-8 border-b-2'>
        <Image src={icon} alt="" />
      </div>
      <div className='space-y-8'>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px]'>{description}</p>
      </div>
    </div>
  )
}

export default Card