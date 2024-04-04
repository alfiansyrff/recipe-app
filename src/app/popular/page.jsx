import React from 'react'
import Head from 'next/head'

const getData = async () => {

  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', { next: { revalidate: 3600 } })
  

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function PopularPage() {

  const popularData = await getData();

  return (
    <>
     <Head>
        <title>Popular Page</title> 
      </Head>
    <div className="flex flex-col items-center justify-center my-5">
      <div className="card card-side bg-base-300 shadow-xl w-1/2 my-5">
        <figure>
          <img src={popularData.meals[0].strMealThumb} alt="Popular Meals" style={{ width: '200px', height: '200px' }} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{popularData.meals[0].strMeal}</h2>
          <p>Makanan khas {popularData.meals[0].strArea}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Detail</button>
          </div>
        </div>
      </div>

      <div className="card card-side bg-base-300 shadow-xl w-1/2 my-5">
        <figure>
          <img src={popularData.meals[0].strMealThumb} alt="Popular Meals" style={{ width: '200px', height: '200px' }} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{popularData.meals[0].strMeal}</h2>
          <p>Makanan khas {popularData.meals[0].strArea}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Detail</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
  
  
}

export default PopularPage