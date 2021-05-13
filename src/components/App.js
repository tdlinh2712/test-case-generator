import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProblemTab from './ProblemTab';
import TestCasesTab from './TestCasesTab';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const App = () => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Container>
                <p>Test Tool</p>
            </Container>
            <AppBar position="static">
            <Tabs onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Problem" {...a11yProps(0)} />
                <Tab label="Script" {...a11yProps(1)} />
            </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ProblemTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TestCasesTab />
            </TabPanel>
            
        </React.Fragment>
    )
}

export default connect(null, actions)(App);
