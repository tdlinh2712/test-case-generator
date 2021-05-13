import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { generateTestCases } from '../../actions';
import CodeEditor from '../CodeEditor/CodeEditor';
import Card from '@material-ui/core/Card';


const TestCasesTab = ({ file, generateTests }) => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Grid item xs>
                    <p>
                        Test cases:
                    </p>
                    <Card>
                        heyy
                    </Card>
                    <p>
                        Log:
                    </p>
                    <Card>
                        heyy
                    </Card>
                </Grid>
                <Grid item xs>
                    heyy
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <p>Code editor</p>
                <CodeEditor />
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