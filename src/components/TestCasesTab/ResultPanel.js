import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../actions';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';
import Logs from './Logs';

import { makeStyles, lighten } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    const getColor = (color) => color;
  
    const getHoverColor = (color) => lighten(color, 0.5);
  
    return {
      root: {
        '& .row-theme--PENDING': {
          color: getColor(theme.palette.info.main),
          '&:hover': {
            color: getHoverColor(theme.palette.info.main),
          },
        },
        '& .row-theme--ACCEPTED': {
          color: getColor('#008450'),
          '&:hover': {
            color: getHoverColor('#008450'),
          },
        },
        '& .row-theme--FAILED': {
          color: getColor('#B81D13'),
          '&:hover': {
            color: getHoverColor('#B81D13'),
          },
        },
      },
    };
  });
  

const ResultPanel = ({testCases, attemptId, fetchResults}) => {
    const classes = useStyles();
    const [selection, setSelection] = useState(null);
    useEffect(() => {
        if (attemptId) {
            console.log(attemptId);
            fetchResults({ attemptId, testCases });
        }
    }, [attemptId]);

    return (
        <React.Fragment>
            <Grid item xs>
                <div>
                <Typography variant="h6" gutterBottom>
                    Test Cases
                </Typography>
                    <div style={{ height: 350, width: '100%' }} className={classes.root}>
                        <DataGrid 
                            rowHeight={25}
                            columns={[{field: 'No.'}, { field: 'id', width: 200 }, { field: 'Verdict', width: 200 }]}
                            rows={testCases ? testCases.map(({testCaseId, verdict}, index) => ({'No.': index, id: testCaseId, Verdict: verdict})) : []}
                            getRowClassName={(params) => `row-theme--${params.getValue('Verdict')}`}
                            onRowSelected={(e) => setSelection(e.data)}
                        />
                    </div>
                </div>
                <div>
                    <Logs test={selection}/>
                </div>
            </Grid>
        </React.Fragment>
    )
}

export default connect(null, actions)(ResultPanel);