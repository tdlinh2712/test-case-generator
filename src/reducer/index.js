
const intialState = {
  file: null,
  testCases: null,
  attemptId: null,
  testDetails: [],
  readCodeOnly: false,
}

export default function testReducer(state = intialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      case 'RESET_STATE':
        return intialState;
      case 'GENERATE_TESTS':
      // Do something here based on the different types of actions
        return state;
      case 'CREATE_ATTEMPTS':
        const {testCases, attemptId} = action.payload;
        const newState = {...state, attemptId, testCases, testDetails: [], readCodeOnly: true};
        return newState;
      
      case 'FETCH_RESULTS':
        const {index, verdict} = action.payload;
        let newState1 = {
          ...state,
          testCases: state.testCases ? state.testCases.map(
            (testCase, i) => i == index ? {
              ...testCase, verdict
            } : testCase
          ) : []
        };
        const pendingTests = newState1.testCases.filter(testCase => testCase.verdict == 'PENDING');
        if (pendingTests.length == 0) {
          newState1.readCodeOnly = false;
        } else {
          newState1.readCodeOnly = true;
        }
        return newState1;
      case 'FETCH_TEST_DETAIL':
        return {
          ...state,
          testDetails: [...state.testDetails, action.payload]
        };
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }