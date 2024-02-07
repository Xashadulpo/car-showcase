'use client'
import { CarCardprops } from '@/types'
import React, { useState } from 'react'
import Image from 'next/image';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CreateCustomButton from './CreateCustomButton';
import CarDetails from './CarDetails';

interface Carprops{
  car:CarCardprops
}

const CarCard = ({car}:Carprops) => {
  const {city_mpg,combination_mpg,cylinders,drive,displacement,fuel_type,highway_mpg,make,model,transmission,year}=car;
  const carRent= calculateCarRent(city_mpg,year);

 const [detailOpen,setdetailOpen]=useState(false);
  
  return (
    <div className=' car-card group'>
      <div className=" car-card_conteiner">
        <h2 className=" text-[22px] leading-[26px] font-bold capitalize">{car.make} {car.model}</h2>
      </div>
        <p className=" flex mt-6 text-[32px] leading-[38px] font-extrabold">
            <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
             {carRent}
          <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
        </p>  
      <div className="relative w-full h-40 my-3 object-contain">
           <Image src={generateCarImageUrl(car)} alt='car_card-logo' fill priority className='object-contain'/>
      </div>
       
      {/* add btn & some special  */}
      <div className='relative flex w-full mt-2'>

        <div className="flex group-hover:invisible w-full justify-between text-gray-900">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" alt='steering-wheel' width={20} height={20} />
            <p className='text-[14px]'>{transmission === 'a' ? "Automatic" : "manual"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt='tire' width={20} height={20} />
            <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" alt='steering-wheel' width={20} height={20} />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>
        
        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
          <CreateCustomButton 
            title='view more'
            classStyle='w-full bg-primary-blue py-[14px] rounded-full '
            handleload={()=>setdetailOpen(true)}
            rightIcon='/right-arrow.svg'
            textStyle='text-white font-extrabold leading-[17px] '/>
        </div>
      </div>    
       <CarDetails car={car} 
          closeModel={()=>setdetailOpen(false)}
          detailOpen={detailOpen}
          />
    </div>
  )
}

export default CarCard
