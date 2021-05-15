import axios from 'axios';
import { GENERATE_TESTS, CREATE_ATTEMPTS } from './types';

const baseUrl = 'http://34.70.3.255:9090';

export const generateTestCases = ()  => async dispatch => {
    const res = await axios.get(`${baseUrl}/testCases`);
   // console.log(res.data);
    dispatch({type: GENERATE_TESTS, payload: res.data});
}

export const createAttempts = ( code )  => async dispatch => {
    try {
        console.log("here", code)
        //need try catch
        const res = await axios.post(`${baseUrl}/attempts`, {code});
        const { attemptId } = res.data;
        console.log(res.data);
        res.data.testCases.forEach( async ({testCaseId}) => {
            const newTest = await axios.put(`${baseUrl}/attempts/${attemptId}/${testCaseId}`);
            console.log(newTest.data);
        });
        
        dispatch({type: CREATE_ATTEMPTS, payload: res.data});
    } catch (e) {
        console.log(e)
    }
    
}
