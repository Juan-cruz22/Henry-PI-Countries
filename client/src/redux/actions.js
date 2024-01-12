import { FILTER_CONTINENTS } from "./actions-type";

export const filtercontinents = (continent) => {
    return {
        type: FILTER_CONTINENTS,
        payload: continent
    };
}