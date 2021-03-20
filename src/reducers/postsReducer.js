import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../actions/postsActions";

const initialState = {
    posts: [],
    loading: false,
    error: false
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                posts: action.payload,
                loading: false,
                error: false,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default postsReducer;