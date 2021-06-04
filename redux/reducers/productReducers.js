const initialState = {
  allProducts: [],
  orderedProduct: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS": {
      const newState = { ...state, allProducts: action.payload };
      return newState;
    }
    case "PLACE_ORDER": {
      const newState = {
        ...state,
        orderedProduct: [
          ...state.orderedProduct,
          state.allProducts.find((p) => p.idMeal === action.payload),
        ],
      };

      return newState;
    }

    default:
      return state;
  }
};

export default productReducers;
