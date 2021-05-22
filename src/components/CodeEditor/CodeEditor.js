import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = ({ code, setSourceCode, readCodeOnly }) => {
  return (
    <AceEditor
      placeholder="Enter your code here"
      height = "360px"
      width = "700px"
      mode="c_cpp"
      theme="monokai"
      name="blah2"
      readOnly = {readCodeOnly}
      fontSize={14}
      showPrintMargin={false}      
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
