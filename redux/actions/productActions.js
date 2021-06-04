export const loadAllMeals = () => {
  return (dispatch) => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "LOAD_ALL_PRODUCTS", payload: data.meals })
      );
  };
};

export const placeOrder = (payload) => {
  return { type: "PLACE_ORDER", payload };
};
