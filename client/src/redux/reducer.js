import { FILTER_CONTINENTS } from "./actions-type";

const initialState = {
  continents: "All", // Definir un continente predeterminado
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_CONTINENTS:
      return {
        ...state,
        continents: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;