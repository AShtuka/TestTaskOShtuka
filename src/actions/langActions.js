// actions types
export const SET_LANG = 'SET_LANG';

export function setLang(lang) {
  return {
    type: SET_LANG,
    payload: lang,
  };
}
