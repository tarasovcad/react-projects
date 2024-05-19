export default (state, action) => {
  // The function takes two parameters:
  // state: The current state of the application.
  // action: An object that describes what happened and how the state should change.
  switch (action.type) {
    // switch(action.type): This checks the type of action that was dispatched. Based on the action type, different logic will be executed.
    case 'DELETE_TRANSACTION':
      return {
        ...state, // copy all properties from the current state to the new state.
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload,
        ),
      };
    // default: If the action type doesn't match any cases, the default case returns the current state unchanged.
    default:
      return state;
  }
};
