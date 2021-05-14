import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { generateTestCases } from '../../actions';
import CodePanel from './CodePanel';
import ResultPanel from './ResultPanel';

const TestCasesTab = ({ file, generateTests }) => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <ResultPanel />
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

const mapStateToProps = ({file}) => ({
    file
})

export default connect(mapStateToProps, mapDispatchToProps)(TestCasesTab);