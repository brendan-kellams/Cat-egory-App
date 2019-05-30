const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CATEGORIES':
      return action.categories
  }
}