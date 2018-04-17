import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create add todo action.', () => {
    expect(actions.addTodo('Using Redux')).toEqual({
      type: 'ADD_TODO',
      text: 'Using Redux'
    });
  });

  it('toggleTodo should create toggle todo action.', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      index: 1
    });
  });

  it('setVisibilityFilter should create set visibility filter action.', () => {
    expect(actions.setVisibilityFilter('SHOW_ALL')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ALL'
    });
  });
});
