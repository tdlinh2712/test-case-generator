import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, CircularProgress } from "@material-ui/core";
import { boxStyles } from "../styles";

const Logs = ({ test, testDetails }) => {
  const classes = boxStyles();
  const [testDetail, setTestDetail] = useState(null);
  useEffect(() => {
    setTestDetail(getTestDetail(test, testDetails));
  }, [testDetails, test]);

  const getTestDetail = (test, testDetails) => {
    if (test == null) {
      return null;
    }
    if (testDetails == null) {
      return null;
    }
    const detail = testDetails.filter(
      (testCase) => testCase.testCaseId == test.id
    );
    if (detail.length == 0) {
      return null;
    }
    return detail[0];
  };

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
            <Box component="span" display="block" className={classes.box}>
              {testDetail == null ? (
                <CircularProgress size={15} />
              ) : (
                testDetail.verdict
              )}
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              Input
            </Typography>
            <Box display="block" overflow="auto" className={classes.box}>
              {testDetail == null ? (
                <CircularProgress size={15} />
              ) : (
                testDetail.input
              )}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" gutterBottom>
              Output
            </Typography>
            <Box display="block" overflow="auto" className={classes.box}>
              {testDetail == null ? (
                <CircularProgress size={15} />
              ) : (
                testDetail.stdout
              )}
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              Expected Output
            </Typography>
            <Box display="block" overflow="visible" className={classes.box}>
              {testDetail == null ? (
                <CircularProgress size={15} />
              ) : (
                testDetail.expectedOutput
              )}
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>{test ? renderTestDetails() : <div></div>}</React.Fragment>
  );
};

const mapStateToProps = ({ testDetails }) => ({
  testDetails,
});

export default connect(mapStateToProps, null)(Logs);
