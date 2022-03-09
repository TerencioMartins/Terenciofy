export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //trocar token pra null quando terminar a aplicação//
  // token: 'BQBxPkiKIdpvmaKuLjXN5wZgWhzj0lRGlmePuAvAGyqOIaACIZ…q0yRp7QjhOpsuPeL2oWmVo8kTJq6W1GnbeTRsltPCcqwLRWrg',
};

const reducer = (state, action) => {
  console.log(action);

  //action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      
    case "SET_DISCOVER_WEEKLY":
      return{
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
};

export default reducer;
