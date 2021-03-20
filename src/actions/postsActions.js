import JSONPlaceholderService from '../services/JSONPlaceholderService'

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

const fetchPostsFailure = () => ({
    type: FETCH_POSTS_FAILURE,
});

export const fetchPosts = () => {
    const { getPosts } = new JSONPlaceholderService();

    return (dispatch) => {
        dispatch(fetchPostsRequest());

        setTimeout(() => {
            getPosts()
                .then((response) => {
                    console.log(response);
                    console.log(response.data);
                    dispatch(fetchPostsSuccess(response.data));
                })
                .catch(() => {
                    dispatch(fetchPostsFailure());
                });
        }, 1000);
    };
};
