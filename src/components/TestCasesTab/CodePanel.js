import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { generateTestCases } from '../../actions';
import CodeEditor from '../CodeEditor/CodeEditor';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: "20px"
    },
  }));

const CodePanel = () => {
    const classes = useStyles();
    const inputEl = React.useRef(null);

    const onButtonClick = () => {
        console.log("inside")
        // `current` points to the mounted file input element
        inputEl.current.click();
    };

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          console.log(text)
        };
        reader.readAsText(e.target.files[0])
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Code editor</Typography>
            <Paper>
                <CodeEditor />
            </Paper>
            <Container className={classes.container}>
                <input
                    style={{ display: "none" }}
                    ref={inputEl}
                    type="file"
                    onChange={(e) => showFile(e)}
                />
                <label htmlFor="outlined-button-file">
                    <Button 
                        variant="contained" 
                        onClick={()=>onButtonClick()}
                    >
                        Upload file
                    </Button>
                </label>
                    
                <Button variant="contained" color="primary">
                    Submit code
                </Button>
            </Container>
        </React.Fragment>
    )
}

export default CodePanel;