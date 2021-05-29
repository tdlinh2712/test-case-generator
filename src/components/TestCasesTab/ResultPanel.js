import React, { useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import * as actions from "../../actions";
import { DataGrid } from "@material-ui/data-grid";
import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@material-ui/core";

import { makeStyles, lighten } from "@material-ui/core/styles";

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center" style={{ marginTop: "9px" }}>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const testTypeDescription = {
  bothShortestAndSecondShortestPath: "Both Shortest And Second Shortest Path",
  edgeCase: "Edge Case",
  shortestPathOnly: "Shortest Path Only",
  noPath: "No Path Exists",
  inputError: "Input Error",
};

const useStyles = makeStyles((theme) => {
  const getColor = (color) => color;

  const getHoverColor = (color) => lighten(color, 0.5);

  return {
    root: {
      "& .test-details--header": {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      "& .row-theme--Running": {
        color: getColor(theme.palette.info.main),
        "&:hover": {
          color: getHoverColor(theme.palette.info.main),
          cursor: "auto",
        },
      },
      "& .row-theme--Passed": {
        color: getColor("#008450"),
        "&:hover": {
          color: getHoverColor("#008450"),
          cursor: "auto",
        },
      },
      "& .row-theme--Failed": {
        color: getColor("#B81D13"),
        "&:hover": {
          color: getHoverColor("#B81D13"),
          cursor: "auto",
        },
      },
    },
  };
});

const ResultPanel = ({
  testCases,
  attemptId,
  fetchResults,
  testDetails,
  setSelectedTest,
  readCodeOnly,
}) => {
  const dataColumns = [
    { field: "No.", width: 75, sortable: false },
    { field: "Test Type", width: 250 },
    { field: "Size", width: 125, headerName: "Input Size" },
    {
      field: "Verdict",
      headerName: "Verdict",
      headerClassName: "test-details--header",
      width: 100,
    },
    {
      field: "",
      headerName: "Details",
      headerClassName: "test-details--header",
      width: 100,
      sortable: false,
      renderCell: (data) => (
        <p
          onClick={() => {
            setSelectedTest(data.row);
          }}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Details
        </p>
      ),
    },
  ];

  const classes = useStyles();

  useEffect(() => {
    if (attemptId && testDetails.length == 0) {
      fetchResults({ attemptId, testCases });
    }
  }, [attemptId]);

  const progress = testCases
    ? (testCases.filter((e) => e.verdict != "Running").length * 100) /
      testCases.length
    : 0;
  return (
    <React.Fragment>
      <Grid item xs>
        <Typography variant="h6" gutterBottom>
          Test Cases
        </Typography>
        <div style={{ height: 350, width: "100%" }} className={classes.root}>
          <DataGrid
            loading={readCodeOnly && !testCases}
            rowHeight={25}
            headerHeight={50}
            columns={dataColumns}
            rows={
              testCases
                ? testCases
                    .filter((test) => testCases.indexOf(test) !== 32)
                    .map(({ type, size, verdict, testCaseId }, index) => {
                      console.log(testCaseId);
                      return {
                        "No.": index + 1,
                        id: testCaseId,
                        "Test Type": testTypeDescription[type],
                        Size: size,
                        Verdict: verdict,
                        "Test Details": "",
                      };
                    })
                : []
            }
            getRowClassName={(params) =>
              `row-theme--${params.getValue("Verdict")}`
            }
            onRowSelected={(e) => setSelectedTest(e.data)}
          />
        </div>
      </Grid>
      {(readCodeOnly || progress == 100) && (
        <LinearProgressWithLabel value={progress} />
      )}
    </React.Fragment>
  );
};

export default connect(null, actions)(ResultPanel);
