# React Redux

### Recap

- In order to use Redux in a react project, we need two packages:
???

### File/Folder Structuring



### Redux Vocabulary
- Store
 Used to store _____ in a central place

- Reducer
 A _____ used to make changes to state. Must take in _____ and an _____ as arguments

- Dispatch
 A _____ called on store that calls the _____ function and passes in up to two arguments: a required argument of an object that must have a key named _____ and an optional argument called _____ that holds any additional information needed.

- Action
 The parameter that represents the second argument passed into the _____ function. An action is an _____ with a key named "type"

- Connect
 A _____ component that is used to give components access to _____ in the form of a function, mapStateToProps, and _____ in the form of a function, mapDispatchToProps

- mapStateToProps
 A function used to pass parts of _____ into a component's _____

- mapDispatchToProps
 A function used to give components access to _____ that call on the store's _____ function

### New Things

#### Action Creators

To make our lives easier, we build functions that build out actions for us!

#### Redux Thunk

To help the asynchronous stuff that we need to handle, we use this tool to make it easer for us to keep things in sync. We'll install an additional package called `redux-thunk` and then change up our action creators a bit