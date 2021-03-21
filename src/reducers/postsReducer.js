import {
    REQUEST, FAILURE, FETCH_POSTS_SUCCESS, DELETE_POST_SUCCESS,
    PATCH_POST_SUCCESS, ADD_POST_SUCCESS, UPDATE_POST_SUCCESS,
    SCROLL_TO_BOTTOM,
    } from "../actions/postsActions";

const initialState = {
    posts: [],
    loading: false,
    error: false,
    scrollToBottom: false,
};

const deletePost = (posts, id) => {
    return posts.filter((post) => post.id !== id);
};

const patchPost = (posts, post) => {
    const index = posts.findIndex((item) => +item.id === +post.id);
    const result = [...posts];
    result[index] = post;
    return result;
};

const addPost = (posts, post) => {
    const result = [...posts];
    post.id = Date.now();
    result.push(post);
    return result;
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case SCROLL_TO_BOTTOM:
            return {
                ...state,
                scrollToBottom: action.payload
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: false,
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: deletePost(state.posts, action.payload),
                loading: false,
                error: false,
            };
        case PATCH_POST_SUCCESS:
            return {
                ...state,
                posts: patchPost(state.posts, action.payload),
                loading: false,
                error: false,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                posts: addPost(state.posts, action.payload),
                loading: false,
                error: false,
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: patchPost(state.posts, action.payload),
                loading: false,
                error: false,
            };
        default:
            return state;
    }
};

export default postsReducer;