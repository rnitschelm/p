import actions from './action_types';

const { SEARCH_TERM_CHANGE, UNMOUNT, LOAD_SKILLS } = actions;
const INITIAL_STATE = {
  skills: [],
  loading: true,
  searchTerm: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SEARCH_TERM_CHANGE:
      return {
        ...state,
        searchTerm: payload
      };

    case UNMOUNT:
      return INITIAL_STATE;

    case LOAD_SKILLS:
      return {
        ...state,
        skills: payload
      };

    default:
      return state;
  }
};
