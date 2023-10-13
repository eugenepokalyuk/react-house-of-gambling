import {
    FETCH_BLOG_REQUEST,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOG_FAILURE,
} from "../actions/blog";

const initialState: any = {
    reviews: [],
    loading: false,
    error: null,
};

export const blogReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case FETCH_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BLOG_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};