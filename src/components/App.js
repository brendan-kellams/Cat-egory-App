import React, { useEffect, useReducer } from 'react';
import CategoryContext from '../context/categoryContext';
import categoryReducer from '../reducers/category-reducer';
import '../App.css';
import { CatLoader } from './CatLoader';
import { AddCategoriesForm } from './AddCategoriesForm';
import { CatList } from './CatList';

const App = () => {
  const [categories, dispatch] = useReducer(categoryReducer);

  useEffect(() => {
    const categories = JSON.parse(localStorage.getItem('categories'));

    if (categories) {
      dispatch({ type: 'POPULATE_CATEGORIES', categories })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories]);
  return (
    <CategoryContext.Provider value={{ categories, dispatch }} className="container">
      <h2>Cat-egory</h2>
      <CatLoader />
      <AddCategoriesForm dispatch={dispatch} />
      <CatList />
    </CategoryContext.Provider>
  );
}

export default App;
