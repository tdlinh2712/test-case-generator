import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../actions';
import { DataGrid } from '@material-ui/data-grid';
import { Typography, Box } from '@material-ui/core';
import { boxStyles } from '../styles';


const Logs = ({test, testDetails}) => {
    const classes = boxStyles();
    const [testDetail, setTestDetail] = useState(null);

    useEffect(() => {
        setTestDetail(getTestDetail(test, testDetails));
    }, [testDetails, test])

    const getTestDetail = (test, testDetails) => {
        if (test == null) {
            return null;
        }
        const detail = testDetails.filter((testCase) => testCase.testCaseId == test.id);
        if (detail.length == 0) {
            return null;
        }
        return detail[0];
    }

    const renderTestDetails = () => {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Logs
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            Compiler Message
                        </Typography>
                        <Box 
                            component="span" display="block"
                            className={classes.box}>
                            {testDetail == null ? test.Verdict : testDetail.verdict}
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            Input
                        </Typography>
                        <Box
                            display="block"
                            overflow="auto"
                            className={classes.box}>
                            {testDetail == null ? "Loading" : testDetail.input }
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            Output
                        </Typography>
                        <Box
                            display="block"
                            overflow="auto"
                            className={classes.box}>
                            {testDetail == null ? "Loading" : testDetail.stdout }
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            Expected Output
                        </Typography>
                        <Box
                            display="block"
                            overflow="visible"
                            className={classes.box}>
                            {testDetail == null ? "Loading" : testDetail.expectedOutput }
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    };

    return (
        <React.Fragment>
            { test ? 
            renderTestDetails() : (
                <div></div>    
            )}
        </React.Fragment>
    )
}

const mapStateToProps = ({ testDetails }) => ({
    testDetails
})

export default connect(mapStateToProps, null)(Logs);