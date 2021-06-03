const initialState = {
  userDetails: { name: "", email: "", photo: "" },
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      const newState = { ...state, userDetails: action.payload };
      return newState;
    }

    default:
      return state;
  }
};

export default loginReducers;
