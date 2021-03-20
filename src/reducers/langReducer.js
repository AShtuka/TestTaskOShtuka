import { SET_LANG } from '../actions/langActions';

const initialState = {
  lang: 'uk',
};

const langReducer = (prevState = initialState, action) => {
  if (action.type === SET_LANG) return { lang: action.payload };
  return prevState;
};

export default langReducer;
