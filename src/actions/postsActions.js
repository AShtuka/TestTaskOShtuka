import JSONPlaceholderService from '../services/JSONPlaceholderService'

export const REQUEST = 'REQUEST';
export const FAILURE = 'FAILURE';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const PATCH_POST_SUCCESS = 'PATCH_POST_SUCCESS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const SCROLL_TO_BOTTOM = 'SCROLL_TO_BOTTOM';

const request = () => ({
    type: REQUEST,
});
const failure = () => ({
    type: FAILURE,
});

const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

const deletePostSuccess = (id) => ({
    type: DELETE_POST_SUCCESS,
    payload: id,
});

const patchPostSuccess = (id) => ({
    type: PATCH_POST_SUCCESS,
    payload: id,
});

const addPostSuccess = (post) => ({
    type: ADD_POST_SUCCESS,
    payload: post,
});

const updatePostSuccess = (post) => ({
    type: UPDATE_POST_SUCCESS,
    payload: post,
});

export const fetchPosts = () => {
    const { getPosts } = new JSONPlaceholderService();

    return (dispatch) => {
        dispatch(request());

        setTimeout(() => {
            getPosts()
                .then((response) => {
                    console.log('getAll', response);
                    dispatch(fetchPostsSuccess(response.data));
                })
                .catch(() => {
                    dispatch(failure());
                });
        }, 1000);
    };
};

export const deletePost = (id) => {
    const { deletePost } = new JSONPlaceholderService();

    return (dispatch) => {
        dispatch(request());

        setTimeout(() => {
            deletePost(id)
                .then((response) => {
                    console.log('delete', response);
                    dispatch(deletePostSuccess(id));
                })
                .catch(() => {
                    dispatch(failure());
                });
        }, 1000);
    };
};

export const patchPost = (data) => {
    const { patchPost } = new JSONPlaceholderService();

    return (dispatch) => {
        dispatch(request());

        setTimeout(() => {
            patchPost(data.id, data)
                .then((response) => {
                    console.log('patch', response);
                    dispatch(patchPostSuccess(data));
                })
                .catch(() => {
                    dispatch(failure());
                });
        }, 1000);
    };
};

export const addPost = (data) => {
    const { addPost } = new JSONPlaceholderService();

    return (dispatch) => {
        dispatch(request());

        setTimeout(() => {
            addPost(data)
                .then((response) => {
                    console.log('add', response);
                    dispatch(addPostSuccess(response.data));
                })
                .catch(() => {
                    dispatch(failure());
                });
        }, 1000);
    };
};

export const updatePost = (id, data) => {
    const { updatePost } = new JSONPlaceholderService();
    const ID = id < 100 ? id : 100;

    return (dispatch) => {
        dispatch(request());

        setTimeout(() => {
            updatePost(ID, data)
                .then((response) => {
                    console.log('update', response);
                    dispatch(updatePostSuccess({...response.data, id}));
                })
                .catch(() => {
                    dispatch(failure());
                });
        }, 1000);
    };
};

export const scrollToBottom = (isScroll) => ({
    type: SCROLL_TO_BOTTOM,
    payload: isScroll
});
