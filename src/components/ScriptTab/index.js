import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../../shared/Card';
import { generateTestCases, createAttempts } from '../../actions/index';
import styled from 'styled-components';

const ScriptTab = ({ file, generateTests, createAttempts }) => {
    const [selectedFile, setSelectedFile] = useState(file);
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files[0]);
        console.log(selectedFile);
        setIsFilePicked(true);
    };
    
    const submitAttempt = code => createAttempts(code);

    const handleSubmission = () => {
        if (!isFilePicked) {
            alert("Please upload a file");
            return;
        } else {
            var reader = new FileReader();
            reader.onload = handleFileLoad;
            const code = reader.readAsText(selectedFile);
            createAttempts(code);
        }
    };

    const handleFileLoad = (event) => {
        return event.target.result;
    }

    return (
        
        <div>
            {file ?? "You have not uploaded any script yet."}
            <button onClick={generateTests}>generate test cases</button>
            <div>
                <div>
			        <input type="file" name="file" onChange={changeHandler} />
				    <button onClick={() => handleSubmission()}>Submit</button>
			    </div>
		    </div>
        </div>
    )
}

const mapDispatchToProps = {
    generateTests: generateTestCases,
    createAttempts: createAttempts
}

const mapStateToProps = ({file}) => ({
    file
})

export default connect(mapStateToProps, mapDispatchToProps)(ScriptTab);