import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = ({ code, setSourceCode }) => {
  //const [sourceCode, setSourceCode] = useState(initCode);
  return (
    <AceEditor
      placeholder="Enter your code here"
      height = "300px"
      width = "660px"
      mode="c_cpp"
      theme="monokai"
      name="blah2"
      fontSize={14}
      onChange={setSourceCode}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default CodeEditor;
