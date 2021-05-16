import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import * as actions from '../../actions';
import CodeEditor from '../CodeEditor/CodeEditor';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: "20px"
    },
  }));

const CodePanel = ({createAttempts, readCodeOnly}) => {
    const classes = useStyles();
    const inputEl = React.useRef(null);
    const initCode =
    '#include <iostream>\nusing namespace std;\nint main(){\n\tcout<< "Hello World";\n\treturn 0; \n}';
    const [sourceCode, setSourceCode] = useState(initCode);

    const onButtonClick = () => {
        inputEl.current.click();
    };

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          setSourceCode(text);
        };
        if (e.target.files) {
            if (e.target.files[0]) {
                reader.readAsText(e.target.files[0])
            }
        }
        
    }

    const submitCode = () => {
        if (readCodeOnly) {
            alert("Tests are being run, please wait until all tests are finished before submitting new code.");
        } else {
            createAttempts(sourceCode);
        }
    }


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Code editor</Typography>
            <Paper>
                <CodeEditor code={sourceCode} setSourceCode={setSourceCode} readCodeOnly={readCodeOnly}/>
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
                    
                <Button variant="contained" color="primary" onClick={submitCode}>
                    Submit code
                </Button>
            </Container>
        </React.Fragment>
    )
}


export default connect( null , actions) (CodePanel);