import {Fragment } from 'react'
import { CarCardprops } from '@/types';
import { Dialog ,Transition } from '@headlessui/react'
import Image from 'next/image';
import { generateCarImageUrl } from '@/utils';

interface CarDetailsprops {
    car:CarCardprops,
    closeModel:()=>void,
    detailOpen:boolean,
}


const CarDetails = ({car ,closeModel ,detailOpen}:CarDetailsprops) => {

  return (
    <>
      <Transition as={Fragment} show={detailOpen}>
        <Dialog as='div' className="relative z-10" onClose={closeModel}>
            <Transition.Child
                as={Fragment}
                 enter="easy-out duration-300"
                 enterFrom="opacity-0"
                 enterTo="opacity-100"
                 leave="easy-in duration-200"
                 leaveFrom="opacity-100"
                 leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
            </Transition.Child>
            <div className="fixed inset-0 overflow-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                    as={Fragment}
                    enter="easy-out duration-300"
                    enterFrom="opacity-0 scale-96"
                    enterTo="opacity-100 scale-100"
                    leave="easy-in duration-200 "
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className='relative w-full max-w-lg max-h-[92vh] overflow-y-auto transform rounded-2xl bg-white p-3'>
                            <button type='button' onClick={closeModel} className='rounded-full w-fit p-2 bg-white absolute z-10 top-2 right-2' >
                               <Image 
                                   src='/close.svg'
                                    alt='close'
                                    width={20}
                                    height={20}
                                    className={'object-contain'}
                                     /> 
                            </button>
                            {/* 4 Image conteiner */}
                            <div className="flex-1 flex flex-col gap-3">
                              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                 <Image src={generateCarImageUrl(car)} alt='car_card-logo' fill priority className='object-contain'/>
                              </div>
                              <div className="w-full grid grid-cols-3 ">
                                <div className="relative w-[95%] h-20">
                                   <Image src={generateCarImageUrl(car,'29')} alt='car_card-logo' fill priority className='object-contain'/>
                                </div>
                                <div className="relative w-[95%] h-20">
                                   <Image src={generateCarImageUrl(car,'33')} alt='car_card-logo' fill priority className='object-contain'/>
                                </div>
                                <div className="relative w-[95%] h-20">
                                    <Image src={generateCarImageUrl(car,'13')} alt='car_card-logo' fill priority className='object-contain'/>
                                </div>
                              </div>
                            </div>
                            {/* adding additional conteint */}
                            <div className="flex-1 flex flex-col gap-[2px] mt-1 ">
                              <h4 className='font-semibold text-start'> {car.make} {car.model} </h4>
                              <div className="flex-wrap flex gap-2 mt-3">

                                {Object.entries(car).map(([keys,value])=>(
                                  <div className="flex justify-between items-center w-full" key={keys}>
                                    <h4 className='text-grey capitalize'>{keys.split("_").join(' ')}</h4>
                                    <p className='text-black-100 font-semibold'>{value}</p>
                                  </div>
                                  ))}

                              </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails;
