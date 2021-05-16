import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { generateTestCases } from '../../actions';
import CodePanel from './CodePanel';
import ResultPanel from './ResultPanel';
import Logs from './Logs';

const TestCasesTab = ({ testCases, attemptId, testDetails, readCodeOnly }) => {
    const [selectedTest, setSelectedTest] = useState(null);
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <ResultPanel 
                    attemptId = {attemptId} 
                    testCases={testCases} 
                    testDetails={testDetails} 
                    setSelectedTest={setSelectedTest}
                 />
            </Grid>
            <Grid item xs={6}>
                <CodePanel readCodeOnly={readCodeOnly} />
            </Grid>
            <Grid item xs={12}>
                <Logs test={selectedTest} />
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = {
    generateTests: generateTestCases,
}

const mapStateToProps = ({
    file,
    testCases,
    attemptId,
    readCodeOnly,
    testDetails }) => ({
    file,
    testCases,
    attemptId,
    testDetails,
    readCodeOnly
})

export default connect(mapStateToProps, mapDispatchToProps)(TestCasesTab);