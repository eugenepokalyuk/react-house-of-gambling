import {
    FETCH_SWITCH_LANGUAGE_REQUEST,
    FETCH_SWITCH_LANGUAGE_SUCCESS,
    FETCH_SWITCH_LANGUAGE_FAILURE,
} from "../actions/settings";

const initialState: any = {
    language: "",
    loading: false,
    error: null,
};

export const settingsReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case FETCH_SWITCH_LANGUAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SWITCH_LANGUAGE_SUCCESS:
            return {
                ...state,
                language: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_SWITCH_LANGUAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};