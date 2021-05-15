import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { generateTestCases } from '../../actions';
import CodeEditor from '../CodeEditor/CodeEditor';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CodePanel from './CodePanel';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';

const ResultPanel = () => {
    
    return (
        <React.Fragment>
            <Grid item xs>
                <div>
                <Typography variant="h6" gutterBottom>
                    Test Cases
                </Typography>
                    <div style={{ height: 250, width: '100%' }}>
                        <DataGrid 
                            columns={[{ field: 'Input' }, { field: 'Output' }, { field: 'Expected Output' }, { field: "Status" }]}
                            rows={[
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <Typography variant="h6" gutterBottom>
                        Logs
                    </Typography>
                    <div style={{ height: 250, width: '100%' }}>
                        <DataGrid 
                            columns={[{ field: 'Test Case' }]}
                            rows={[
                            ]}
                        />
                    </div>
                </div>
                
            </Grid>
            <Grid item xs>
                heyy
            </Grid>
        </React.Fragment>
    )
}

export default ResultPanel;