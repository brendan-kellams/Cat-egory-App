import React, { useState, useContext } from 'react';
import CategoryContext from '../context/categoryContext';

export const AddCategoriesForm = () => {
  const [categories, setCategories] = useState({});
  const [name, setName] = useState('');
  const { dispatch } = useContext(CategoryContext);

  const addCategory = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CATEGORY',
      name
    })
    setName('')
  }

  return (
    <div>
      <form onSubmit={addCategory}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Save</button>
      </form>
    </div>
  )
}



// const allStored = {
  //   'fuzzy': [
  //     "url",
  //     "url2"
  //   ],
  //   'angry': [
  //     "url3"
  //   ]
  // }
  // let allStoredImages = localStorage.getItem('_cat_image_stored');

  // function onSave(catUrl, categoryInputted) {
  //   let allStoredImagesObject = JSON.parse(allStoredImages);
  //   let categoryAlreadyExisted = false;

  //   if (categoryAlreadyExisted) {
  //     allStoredImagesObject[categoryInputted].push(catUrl);
  //   } else {
  //     allStoredImagesObject[categoryInputted] = [catUrl];
  //   }
  // }

  // function getCountFromCategory(categoryToSearch) {
  //   let allStoredImagesObject = JSON.parse(allStoredImages);
  //   return allStoredImagesObject.categoryToSearch.length;
  // }

  // function getAllUrlFromCategory(categoryToSearch) {

  // }

  // const arrayOfUrl = ['url1', 'url2', 'url3'];

  // const thingToPrint = arrayOfUrl.map((element) =>
  //   <img src="element" />
  // );

  // const displayPics = () => {
  //   console.log('here come the cats')
  // }
