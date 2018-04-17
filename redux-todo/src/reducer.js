import {combineReducers} from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  visibilityFilters
} from './action';

const {SHOW_ALL} = visibilityFilters;

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {
          text: action.text,
          commpleted: false
        }];

    case TOGGLE_TODO:
      return state.map((todo, index) => {
          if (index == action.index) {
            return Object.assign({}, todo, {
              commpleted: !todo.commpleted
            });
          }

          return todo;
        });

    default:
      return state;
  }
}

function visibilityFilters(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilters,
  todos
});

export default todoApp;
