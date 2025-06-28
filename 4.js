import { createStore } from 'redux';

// Assume tasksReducer is defined as above
const store = createStore(tasksReducer);

// 1) Log the initial state
console.log(store.getState());
// -> { tasks: [] }

// 2) Subscribe to changes
const unsubscribe = store.subscribe(() => {
  console.log('State updated:', store.getState());
});

// 3) Dispatch some actions
store.dispatch(addTask(1, 'Buy groceries'));
/*
  Console logs:
  State updated: { tasks: [ { id: 1, title: 'Buy groceries', completed: false } ] }
*/

// 4) Stop listening (optional)
unsubscribe();
