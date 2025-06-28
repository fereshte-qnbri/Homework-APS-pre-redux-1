// A reducer that manages an array of tasks
const initialState = {
  tasks: []
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: action.payload.id, title: action.payload.title, completed: false }
        ]
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id
            ? { ...t, completed: !t.completed }
            : t
        )
      };

    default:
      return state;  // If the action type is unknown, return the unmodified state
  }
}
