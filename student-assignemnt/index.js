// explain below concepts and write an example for each one

// action:
Definition: A plain JavaScript object that must have a type field. It describes “what happened” in the application.

// action creator:
Definition: A function that returns an Action object. This helps avoid typos and centralizes action creation.



// reducer:
Definition: A pure function that takes the previous state and an action, and returns the next state. 
Every time an action is dispatched, the reducer computes the new state.



// store:
Definition: The single source of truth that holds the application state. You interact with it via three main methods:

