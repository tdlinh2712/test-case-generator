import axios from 'axios';
import { GENERATE_TESTS, CREATE_ATTEMPTS } from './types';

const baseUrl = 'http://104.198.7.29:9090';

export const generateTestCases = ()  => async dispatch => {
    const res = await axios.get(`${baseUrl}/testCases`);
   // console.log(res.data);
    dispatch({type: GENERATE_TESTS, payload: res.data});
}

export const createAttempts = ( code )  => async dispatch => {
    const res = await axios.post(`${baseUrl}/attempts`, {
        code
    });
    console.log(res.data);
    dispatch({type: CREATE_ATTEMPTS, payload: res.data});
}
