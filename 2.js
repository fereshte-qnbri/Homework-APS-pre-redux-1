// An action creator that builds an ADD_TASK action
function addTask(id, title) {
  return {
    type: 'ADD_TASK',
    payload: { id, title }
  };
}

// Usage:
const action = addTask(1, 'Buy groceries');
// action === { type: 'ADD_TASK', payload: { id: 1, title: 'Buy groceries' } }
