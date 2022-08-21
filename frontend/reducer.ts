const initialState = {
  posts: [
    {
      id: 0,
      title: "Init Post",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEFAULT_ACTION_TYPE":
      console.log("action.payload", action.payload);
      return {
        ...state,
        posts: action.payload,
      };
  }
  return state;
};

export default reducer;
