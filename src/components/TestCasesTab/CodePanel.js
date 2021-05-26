import React, { useState } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import * as actions from "../../actions";
import CodeEditor from "../CodeEditor/CodeEditor";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  Typography,
} from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import { shadows } from "@material-ui/system";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "20px",
  },
}));

const CodePanel = ({ createAttempts, readCodeOnly }) => {
  const classes = useStyles();
  const initCode =
    '#include <iostream>\nusing namespace std;\nint main(){\n\tcout<< "Hello World";\n\treturn 0; \n}';
  const [checkBoxValues, setCheckBoxValues] = React.useState({
    shortestPathOnly: false,
    bothShortestAndSecondShortestPath: false,
    noPath: false,
    inputError: false
  });
  const [sourceCode, setSourceCode] = React.useState(initCode);
  const handleChange = (event) => {
    setCheckBoxValues({
      ...checkBoxValues,
      [event.target.value]: event.target.checked,
    });
  };
  const { shortestPathOnly, bothShortestAndSecondShortestPath, noPath,inputError } =
    checkBoxValues;

  const isEnoughTestCase =
    [shortestPathOnly, bothShortestAndSecondShortestPath, noPath,inputError].filter(
      (v) => v
    ).length > 0;

  const inputEl = React.useRef(null);

  const onButtonClick = () => {
    inputEl.current.click();
  };

  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      setSourceCode(text);
    };
    if (e.target.files) {
      if (e.target.files[0]) {
        reader.readAsText(e.target.files[0]);
      }
    }
  };

  const submitCode = () => {
    if (readCodeOnly) {
    } else {
      var testCaseTypes = [];
      for (var key in checkBoxValues) {
        if (checkBoxValues[key]) testCaseTypes.push(key);
      }
      createAttempts(sourceCode, testCaseTypes);
    }
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div style={{ flexChild: 1, margin: 5 }}>
          <Typography variant="h6" gutterBottom>
            Code editor
          </Typography>
          <Paper>
            <CodeEditor
              code={sourceCode}
              setSourceCode={setSourceCode}
              readCodeOnly={readCodeOnly}
            />
          </Paper>
        </div>
        <div style={{ flexChild: 1, margin: 5 }}>
          <Typography variant="h6" gutterBottom>
            Test Generation Options
          </Typography>
          <Paper elevation={false}>
            <FormGroup required>
              <FormLabel component="legend" error={!isEnoughTestCase}>
                Choose at least one*
              </FormLabel>
               <FormControlLabel
                control={
                  <Checkbox
                    checked={noPath}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="No Path Exists"
                value="noPath"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={shortestPathOnly}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Shortest Path Only"
                value="shortestPathOnly"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bothShortestAndSecondShortestPath}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                value="bothShortestAndSecondShortestPath"
                label="Both Shortest And Second Shortest Path"
              />


              <FormControlLabel
                control={
                  <Checkbox
                    checked={inputError}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Input Error"
                value="inputError"
              />
              
            </FormGroup>
          </Paper>
        </div>
      </div>

      <Container className={classes.container}>
        <input
          style={{ display: "none" }}
          ref={inputEl}
          type="file"
          onChange={(e) => showFile(e)}
        />
        <label htmlFor="outlined-button-file">
          <Button variant="contained" onClick={() => onButtonClick()}>
            Upload file
          </Button>
        </label>

        <Button
          disabled={
            !(isEnoughTestCase && sourceCode.length > 0) || readCodeOnly
          }
          variant="contained"
          color="primary"
          onClick={submitCode}
        >
          Run tests
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default connect(null, actions)(CodePanel);
