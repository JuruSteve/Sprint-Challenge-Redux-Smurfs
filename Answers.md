1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map(), Object.assign(), Array.filter()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

the only way to make modifications to an app is by dispatching actions.

Reducers are pure functions in redux. Reducers take in some state, and a description of what changes happened, and it returns a copy of state

Store contains the state for the whole application when using redux. Store is known to be the single source of truth because it holds the application state and passes it down to components

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the overall state of the app. it is used to hold properties that several components are going to need.

Component state holds component-specific props in state, such as toggling modals, forms ...

1.  What is middleware?

middleware is a used to intercept a process, perform an action, and then continue the process. It is used to add new functionality to an app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Since Redux is synchronous, Redux-thunk is middleware made to extends Redux functionality by making it asynchronous to allow promises

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect() links up components with redux store
