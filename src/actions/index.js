import axios from 'axios';
import { GENERATE_TESTS, CREATE_ATTEMPTS, FETCH_RESULTS, FETCH_TEST_DETAIL, RESET_STATE } from './types';

const baseUrl = 'http://34.70.3.255:9090';

export const generateTestCases = ()  => async dispatch => {
    const res = await axios.get(`${baseUrl}/testCases`);
    dispatch({type: GENERATE_TESTS, payload: res.data});
}

export const resetState = () => dispatch => {
    dispatch({type: RESET_STATE, payload: null});
}

export const createAttempts = ( code )  => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/attempts`, {code});
        dispatch({type: CREATE_ATTEMPTS, payload: res.data});
    } catch (e) {
        console.log(e)
    }
}

export const fetchResults = ( {attemptId, testCases} ) => async dispatch => {
    try {
        const testResults = await testCases.map( async ({testCaseId}, index) => {
            const newTest = await axios.put(`${baseUrl}/attempts/${attemptId}/${testCaseId}`);
            dispatch({type: FETCH_RESULTS, payload: { index, testCaseId: newTest.data.testCaseId, verdict: newTest.data.verdict } });
            const res = await axios.get(`${baseUrl}/attempts/${attemptId}/${testCaseId}`);
            dispatch({type: FETCH_TEST_DETAIL, payload: res.data });
            return newTest.data;
        });
    } catch (e) {
        console.log(e);
    }
    
}

export const getTestDetails = ( attemptId, testCaseId ) => async dispatch => {
    try {
       // dispatch({type: GET_TEST})
        //const res = await axios.get(`${baseUrl}/attempts/${attemptId}/${testCaseId}`);
        //console.log(res.data);
    } catch (e) {
        console.log(e);
    }
}
