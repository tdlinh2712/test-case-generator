import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../actions';
import { DataGrid } from '@material-ui/data-grid';
import { Typography, Box } from '@material-ui/core';


const Logs = ({test, testDetails}) => {

    useEffect(() => {
        console.log(testDetails);
    }, [testDetails]);

    const renderTestDetails = () => {

        return (
            <Box>
                <Typography variant="p" gutterBottom>
                    Compiler Message
                </Typography>
                <Box>
                    yo
                </Box>
                <Typography variant="p" gutterBottom>
                    Input
                </Typography>
                <Box>
                    yo
                </Box>
                <Typography variant="p" gutterBottom>
                    Output
                </Typography>
                <Box>
                    yo
                </Box>
                <Typography variant="p" gutterBottom>
                    Expected Output
                </Typography>
            </Box>
        )
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Logs
            </Typography>
            <div style={{ height: 250, width: '100%' }}>
                {test ? renderTestDetails() : (
                    <div>yo</div>
                )}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = ({ testDetails }) => ({
    testDetails
})

export default connect(mapStateToProps, null)(Logs);