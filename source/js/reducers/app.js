import {
  LOAD_ADVERTISEMENTS,
} from '../actions/app';

const initialState = {
  meta: {},
  advertisements: [],
};

const actionsMap = {
    [LOAD_ADVERTISEMENTS]: (state, action) => {
      return Object.assign({}, state, {
        meta: action.payload.meta,
        advertisements: action.payload.data,
      })
    },
  }
;

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
