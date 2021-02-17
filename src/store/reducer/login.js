import * as actionTypes from "../actions/actionTypes";

const initState = {
  userData: null,
  spotifyToken:
    "BQBzEPlNmgGtRoUnTpzPPPC3wzv3yfT9LkNA8uGzAr8LtJn1msOhp2DSlIQErfn85h6d4b6p7Jf5rXTx7C2F7C1Vkhdzk1tavGR1hiEB_FHBEwgusJgbDq_i1ZpXN56AFVBx4H35f--AZ8GkCtPrSfyzGL20_6ssMKKn3gtbIcqmZXPD",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_SPOTIFY_DATA:
      return {
        ...state,
        spotifyToken: action.token,
        userData: action.userData,
      };

    default:
      return state;
  }
};

export default reducer;
