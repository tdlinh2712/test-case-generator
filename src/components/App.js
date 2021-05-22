import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProblemTab from "./ProblemTab";
import TestCasesTab from "./TestCasesTab";
import * as actions from "../actions";
import { connect } from "react-redux";

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
        <Box p={2}>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const App = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" style={{ padding: "10px" }} color="primary">
        Automated Test Tool
      </Typography>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Problem" {...a11yProps(0)} />
          <Tab label="Test" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProblemTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TestCasesTab />
      </TabPanel>
    </React.Fragment>
  );
};

export default connect(null, actions)(App);
