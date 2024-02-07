import {CarCardprops, FilterProps} from '@/types'
import { useSearchParams } from 'next/navigation';



export async function fatchcar(filter:FilterProps) {
    const {manufacturer,model,limit,year,fuel}=filter;
    const headers = {
        'X-RapidAPI-Key': '303e870d94mshb0272fd742729c6p1e714ajsn90856483a388',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers });
    const result = await response.json();
    
    return result;
}



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRater = city_mpg * mileageFactor;


    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRater + ageRate;
  
    return rentalRatePerDay.toFixed(0);
}



    export const generateCarImageUrl = (car: CarCardprops, angle?: string) => {
        const { make, model, year } = car;
        const baseUrl = "https://cdn.imagin.studio/getimage";
    
        const queryParams = new URLSearchParams({
            customer: '-hrjavascriptmastery',
            make: make,
            modelfmily: model.split(' ')[0],
            zoomtype: 'fullscreen',
            modelYear: `${year}`,
            angle: angle || ""
        });
        console.log(`${baseUrl}?${queryParams.toString()}`);
        
        return `${baseUrl}?${queryParams.toString()}`;
    }
    

// update search params for fules and year 
export const updatedSearchParams = ( type : string , value : string) => {
        const useparams = new URLSearchParams(window.location.search);
        useparams.set(type,value);
        const updatepatname = `${window.location.pathname}?${useparams.toString()}` ;
    

        return updatepatname;
    }