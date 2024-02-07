'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Searchmanufacturer from './Searchmanufacturer';
import { SearchBarProps } from '@/types';

const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
  <button className={`z-10 ${otherclasses}`}>
    <Image
      src='/magnifying-glass.svg'
      width={40}
      height={40}
      alt='Search Magnifying Glass'
    />
  </button>
);

const SearchBar = ({setmanufacuterer , setmodel}:SearchBarProps) => {
  const [searchManufacturer, setsearchManufacturer] = useState('');
  const [searchModel, setsearchModel] = useState('');


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      alert('Please type something');
    }
      setmodel(searchModel)
      setmanufacuterer(searchManufacturer)
    };
  

  // const updateUseParams = (searchModel: string, searchManufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (searchModel) {
  //     searchParams.set('searchModel', searchModel);
  //   } else {
  //     searchParams.delete('searchModel');
  //   }

  //   if (searchManufacturer) {
  //     searchParams.set('searchManufacturer', searchManufacturer);
  //   } else {
  //     searchParams.delete('searchManufacturer');
  //   }

  //   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  //   router.push(newPathname);
  // };

  return (
    <form className='searchBar' onSubmit={handleSearch}>
      <div className="Searchbar_item">
        <Searchmanufacturer
          seLected={searchManufacturer}
          setseLected={setsearchManufacturer}
        />
        <SearchButton otherclasses='sm:hidden' />
      </div>
      <div className="Searchbar_item">
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          alt='searchModel Icon'
          className='absolute top-2 ml-4'
        />
        <input
          type='text'
          name='searchModel'
          className='searchbar__input'
          value={searchModel}
          onChange={(e) => setsearchModel(e.target.value)}
          placeholder='Tiguau'
          autoComplete='off'
        />
        <SearchButton otherclasses='sm:hidden' />
      </div>
      <SearchButton otherclasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
