import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../actions';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';

const Logs = ({test}) => {

    const renderTestDetails = () => {
        return (
            <div>
                {test.Verdict}
            </div>
        )
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Logs
            </Typography>
            <div style={{ height: 250, width: '100%' }}>
                {test ? renderTestDetails(test) : (
                    <div>yo</div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Logs;