import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await response.json();
        
        if (jsonData.meals) {
          setInfo(jsonData.meals[0]);
        } else {
          setError('Data not found');
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getInfo();
  }, [mealid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!info ? (
        <div>Data not found</div>
      ) : (
        <div>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <h1>Recipe Details</h1>
          <button>{info.strMeal}</button>
          <h3>Instructions</h3>
          <p>{info.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
