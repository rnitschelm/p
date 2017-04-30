import actions from './action_types.js';

const {
  SEARCH_TERM_CHANGE,
  UNMOUNT, 
  LOAD_SKILLS
} = actions;

export const search = searchTerm => {
  return dispatch => {
    dispatch({
      type: SEARCH_TERM_CHANGE,
      payload: searchTerm
    });
  };
};

export const unmount = () => {
  return dispatch => {
    dispatch({
      type: UNMOUNT
    });
  };
};

export const loadSkills = skills => {
  return dispatch => {
    dispatch({
      type: LOAD_SKILLS,
      payload: skills
    });
  };
};
