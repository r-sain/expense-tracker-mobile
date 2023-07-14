export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DELETE_TRANSACTION":
      return Object.assign({}, state, {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      });
    case "ADD_TRANSACTION":
      return Object.assign({}, state, {
        transactions: [payload, ...state.transactions],
      });
    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: payload,
      };
    default:
      return state;
  }
};
