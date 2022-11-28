import {
    ActionTypes
} from "../types";

const INITIAL_STATE = {
    Platinum: 0,
    Gold: 0,
    Silver: 0,
    topPool: 0
};

const poolInfoReducer = (state = INITIAL_STATE, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.POOL_DETAIL:
            return {
                ...state,
                Platinum: payload.Platinum,
                    Gold: payload.Gold,
                    Silver: payload.Silver,
                    topPool: payload.topPool
            };
        default:
            return state;
    }
};
export default poolInfoReducer;