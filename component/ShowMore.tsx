'use client'

import { ShowMoreProps } from '@/types'
import { updatedSearchParams } from '@/utils';
import { useRouter } from 'next/navigation'
import React from 'react'
import CreateCustomButton from './CreateCustomButton';


const ShowMore = ({pageNumber,isNext,setlimit }:ShowMoreProps) => {

  const handleNavigation = () => {
    const newlimit = (pageNumber + 1) * 10;
  
   setlimit(newlimit);

    

   
  }
  return (
    <div className=' w-full mt-10 gap-5 flex-center'>
      {!isNext && (
        <CreateCustomButton
          title='show more'
          handleload={handleNavigation}
          classStyle='bg-primary-blue px-4 py-2 rounded-full text-white'
        />
      )}
    </div>
  )
}

export default ShowMore
