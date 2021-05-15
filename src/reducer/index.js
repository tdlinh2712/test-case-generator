
const intialState = {
  file: null,
  testCases: null,
  attemptId: null
}

export default function testReducer(state = intialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      case 'GENERATE_TESTS':
      // Do something here based on the different types of actions
        return state;
      case 'CREATE_ATTEMPTS':
        const {testCases, attemptId} = action.payload;
        const newState = {...state, attemptId, testCases};
        return newState;
      
      case 'FETCH_RESULTS':
        const {index, verdict} = action.payload;
        return {
          ...state,
          testCases: state.testCases.map(
            (testCase, i) => i === index ? {
              ...testCase, verdict
            } : testCase
          )
        }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }