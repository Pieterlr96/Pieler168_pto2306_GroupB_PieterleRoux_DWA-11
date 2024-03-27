// Define actions
const Actions = {
    INCREMENT: 'INCREMENT',
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    RESET: 'RESET'
  }
  
  // Define action creators
  const increment = () => ({
    type: Actions.INCREMENT
  })
  
  const add = () => ({
    type: Actions.ADD
  })
  
  const subtract = () => ({
    type: Actions.SUBTRACT
  })
  
  const reset = () => ({
    type: Actions.RESET
  })
  
  // Define reducers
  const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case Actions.INCREMENT:
        return { count: state.count + 1 }
      case Actions.ADD:
        return { count: state.count + 1 }
      case Actions.SUBTRACT:
        return { count: state.count - 1 }
      case Actions.RESET:
        return { count: 0 }
      default:
        return state
    }
  };
  
  // Define store
  const createStore = (reducer) => {
    let state = reducer(undefined, {})
    let listeners = []
  
    const getState = () => state
  
    const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach(listener => listener());
    }
  
    const subscribe = (listener) => {
      listeners.push(listener)

      // Return a function to unsubscribe
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }
    }
  
    // Dispatch an initial action to ensure the initial state is logged
    dispatch({})
  
    return { getState, dispatch, subscribe }
  }
  

  const store = createStore(reducer)

  
  
  // S1 Log initial state
  console.log("Scenario 1 - Initial state:", store.getState())
  
  // S2 ADD actions X2
  store.dispatch(add())
  store.dispatch(add())
  console.log("Scenario 2 - State after dispatching ADD actions:", store.getState())
  
  // S3 SUBTRACT action
  store.dispatch(subtract())
  console.log("Scenario 3 - State after dispatching SUBTRACT action:", store.getState())
  
  // S4 RESET action
  store.dispatch(reset())
  console.log("Scenario 4 - State after dispatching RESET action:", store.getState())
  