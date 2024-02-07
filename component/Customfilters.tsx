'use client'
import { Listbox, Transition } from '@headlessui/react'
import React, { useState, Fragment } from 'react'
import Image from 'next/image';
import { CustomfilterProps } from '@/types';
import { useRouter } from 'next/navigation';
import { updatedSearchParams } from '@/utils';



const Customfilters = (({ title, options ,setfilters }: CustomfilterProps) => {
  const [select, setSelected] = useState(options[0]);
  

// ! 2 upadate search paramiter for year and fuel //

// const handlepathname = (e:{title:string,value:string}) => {
//   const newPathName = updatedSearchParams ( title,e.value.toLowerCase() );
  
//   router.push(newPathName);
// }
  return (
    <div className='w-fit'>
      <Listbox 
        value={select} 
        onChange={(e) =>{
          setSelected(e);
          setfilters(e.value);
         }} 
      >
        <div className='relative w-fit z-10' >
          {/* custom filter btn scroll  */}
          <Listbox.Button className="custom-filter__btn" >
            <span className="block truncate" > {select.title} </span>

            <Image src='/chevron-up-down.svg'
              width={20}
              height={20}
              alt="logo " />
          </Listbox.Button >

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className='custom-filter__options' >

              {options.map((option) => (

                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`} >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>

          </Transition>
        </div>
      </Listbox >
    </div>
  )
})

export default Customfilters
