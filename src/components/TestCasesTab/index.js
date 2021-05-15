import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { generateTestCases } from '../../actions';
import CodePanel from './CodePanel';
import ResultPanel from './ResultPanel';

const TestCasesTab = ({ file, generateTests, testCases, attemptId }) => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <ResultPanel attemptId = {attemptId} testCases={testCases} />
            </Grid>
            <Grid item xs={6}>
                <CodePanel />
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
    attemptId}) => ({
    file,
    testCases,
    attemptId
})

export default connect(mapStateToProps, mapDispatchToProps)(TestCasesTab);