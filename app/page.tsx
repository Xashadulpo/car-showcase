"use client"

import { Hero, SearchBar, Customfilters, CarCard } from "@/component";
import ShowMore from "@/component/ShowMore";
import { yearsOfProduction, fuels } from "@/constant/constants";
import { fatchcar } from "@/utils";
import { useEffect, useState } from "react";
import Image from 'next/image';



const index = () => {
    const [allCars, setallCars] = useState([]);
    const [loading, setloading] = useState(false);
    //    search state 
    const [manufacturer, setmanufacuterer] = useState('');
    const [model, setmodel] = useState('');
    // fuel and year state 
    const [fuel, setfuel] = useState('');
    const [year, setyear] = useState(2022);
    // pagination state 
    const [limit, setlimit] = useState(10);


    const getCars = async () => {
        setloading(true)
        try {
            const allCars = await fatchcar({
                manufacturer: manufacturer || '',
                year: year || 2022,
                fuel: fuel || "",
                limit: limit || 10,
                model: model || "",

            });
            setallCars(allCars);
        } catch (error) {
            console.log(error);

        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        getCars();
        console.log(year, fuel);
    }, [manufacturer, model, limit, fuel, year]);

    // fuel and year wrapping for type 
    const setFuelWrapper = (value: string | number) => {
        setfuel(value.toString()); // Convert number to string if needed
    };

    const setYearWrapper = (value: string | number) => {
        if (typeof value === 'number') {
            setyear(value);
        } else {
            setyear(parseInt(value)); // Convert string to number if needed
        }
    };



    return (<>
        <main className='relative'>
            <Hero />
            <div className="mt-9 padding-y padding-x ">
                <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
                    <h1 className="text-4xl font-extrabold">car catalogu</h1>
                    <p>explore the car you like</p>
                </div>
                <div className="home__filter-container">
                    <div className="home__filters">
                        <SearchBar
                            setmanufacuterer={setmanufacuterer}
                            setmodel={setmodel} />
                    </div>

                    <div className="home__filters">
                        <Customfilters title='fuel' options={fuels} setfilters={setFuelWrapper} />
                        <Customfilters title='year' options={yearsOfProduction} setfilters={setYearWrapper} />
                    </div>
                </div>
            </div>
            {allCars.length > 0 ? (
                <section className="padding-x padding-y" >
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 phone:grid-cols-2 sm:grid-cols-1 w-full gap-8 pt-14">
                        {allCars.map((car) => (
                            <CarCard
                                key={car}
                                car={car} />
                        ))}
                    </div>
                    {loading && (
                        <div className="mt-16 w-full flex-center">
                            <Image
                                src='/loader.svg'
                                alt="loader"
                                width={50}
                                height={50}
                                className="object-contain" />
                        </div>
                    )}
                    <ShowMore
                        pageNumber={limit / 10}
                        isNext={limit > allCars.length}
                        setlimit={setlimit}
                    />
                </section>
            ) : (
                <div>
                    <h2>Oops, no result </h2>
                </div>
            )}
        </main>



    </>)
}

export default index;