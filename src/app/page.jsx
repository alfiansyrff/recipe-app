'use client'

import React, { useState } from 'react';
import SearchBar from '@/components/searchbar/Searchbar';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [mealList, setMealList] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.meals) {
        setMealList(data.meals);
        setNotFound(false);
      } else {
        setMealList([]);
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getMealRecipe = async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
      let mealItem = e.target.parentElement.parentElement;
      try {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        mealRecipeModal(data.meals);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const mealRecipeModal = (meal) => {
    meal = meal[0];
    let html = `
      <h2 class="recipe-title">${meal.strMeal}</h2>
      <p class="recipe-category">${meal.strCategory}</p>
      <div class="recipe-instruct">
        <h3>Instruksi:</h3>
        <p>${meal.strInstructions}</p>
      </div>
      <div class="recipe-ingredients">
        <h3>Ingredients / Bahan-bahan:</h3>
        <p>`;

    const ingredientsArray = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredientsArray.push(`${ingredient} - ${measure}`);
      }
    }

    html += ingredientsArray.join(', ');

    html += `
        </p>
      </div>
      <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="">
      </div>
      <div class="recipe-link">
        <a href="${meal.strYoutube}" target="_blank" class="btn btn-outline">Lihat Video</a>
      </div>
    `;

    // Display modal
    const mealDetailsContent = document.querySelector('.meal-details-content');
    mealDetailsContent.innerHTML = html;
    const mealDetails = document.querySelector('.meal-details');
    mealDetails.classList.add('showRecipe');
  };

  const handleCloseModal = () => {
    const mealDetails = document.querySelector('.meal-details');
    mealDetails.classList.remove('showRecipe');
  };

  return (
    <div className="my-5 container">
      <div className="meal-wrapper">
      <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          loading={loading}
        />
  
        <div className="meal-result">
          <h2 className="title">Hasil Pencarian Anda:</h2>
          {loading && <p className='text-center'>Loading...</p>}
          {!loading && notFound ? (
            <div className="flex justify-center items-center notFound">
              <p className='text-error'>Maaf, Kami Ga Nemunin Apa Yang Kamu Cari 😔</p>
            </div>
          ) : (
            <div id="meal" onClick={getMealRecipe}>
              {mealList.map((meal) => (
                <div key={meal.idMeal} className="meal-item bg-base-300" data-id={meal.idMeal}>
                  <div className="meal-img">
                    <img src={meal.strMealThumb} alt="food" />
                  </div>
                  <div className="meal-name">
                    <h3>{meal.strMeal}</h3>
                    <a href="#" className="btn btn-info btn-block recipe-btn">
                      Lihat Resep
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="meal-details bg-info">
          <button onClick={handleCloseModal} className="btn btn-circle btn-outline btn-error recipe-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="meal-details-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
