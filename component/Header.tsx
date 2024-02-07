import React from 'react'
import Image from 'next/image'
import CreateCustomButton from './CreateCustomButton'

const Header = () => {
  return (
    <div className='w-full absolute z-10 flex justify-between items-center py-4 padding-x '>
      <Image src='/logo.svg' alt='logo' width={118} height={18} />
      <CreateCustomButton
          title='Sign in'
          classStyle="bg-white rounded-full min-w-[130px]"/>
    </div>
  )
}

export default Header
