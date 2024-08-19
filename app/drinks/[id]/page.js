import React from 'react'
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import Image from 'next/image';

import drinkImg from './drink.jpg'
console.log(drinkImg)

const getSingleDrink = async (id) => {
    const res = await fetch(`${url}${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch a drink...')
    }

    return res.json();
}


export default async function SingleDrinkPage({ params }) {
    const data = await getSingleDrink(params.id)
    // console.log(params.id)
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;

    console.log(data)
    return (
        <div>
            <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
                baxk to drinks
            </Link>

            {/* <img src={drinkImg.src}  /> */}
            {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg'/>  local*/}
            <Image
                src={imgSrc}
                width={300}
                height={300}
                className='w-48 h-48 rounded-lg shadow-lg mb-4'
                priority
                alt={title}>
            </Image>
            <h1 className='text-4xl mb-8 '>{title}</h1>
        </div>
    )
}
