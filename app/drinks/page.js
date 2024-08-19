import DrinksList from '@/components/DrinksList';
import React from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';



const fetchDrinks =async ()=>{
    await new Promise((resolve, reject) => {
        setTimeout(resolve,1000)
    })
    const response =await fetch(url)

    // throw error explicitly as fetch only consider network error
    if(!response.ok){
      throw new Error('Failed to fetch drinks')
    }


    const data = await response.json();
    return data
}


// traditional react components can't be async
export default async function DrinksPage() {

    const data = await fetchDrinks();
    // console.log(data)

  return (
    <div>
      <h1 className='text-7xl'>
        <DrinksList drinks={data.drinks}/>
      </h1>
    </div>
  )
}

