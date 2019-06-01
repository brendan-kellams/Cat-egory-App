const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CATEGORIES':
      return action.categories
    case 'ADD_CATEGORY':
      return [
        ...state,
        { name: action.name, picture: action.picture }
      ]
    default:
      return state
  }
};

export { categoryReducer as default };