
import {CustomBtnType }from '@/types';
import React from 'react'
import Image from 'next/image';
const CreateCustomButton = ({title,handleload,classStyle,textStyle,rightIcon}:CustomBtnType) => {
  return (
    <button 
        disabled={false}
        type={'button' || "submit"} 
        className={`create__custom_btn ${classStyle} `}
        onClick={handleload}>
       <span className={`flex-1 ${textStyle}`}> 
         {title}
        </span> 
        
         {rightIcon && (
          <div className='absolute right-2 bottom-3 w-6 h-6'>
            <Image src={rightIcon} alt='rightIcon' fill className='object-contain'  />
          </div>
         )}

    </button>
  )
}

export default CreateCustomButton
