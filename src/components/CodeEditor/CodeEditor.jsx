import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const initCode =
  '#include <iostream>\nusing namespace std;\nint main(){\n\tcout<< "Hello World";\n\treturn 0; \n}';

const CodeEditor = () => {
  const [sourceCode, setSourceCode] = useState(initCode);
  return (
    <AceEditor
      placeholder="Enter your code here"
      height="500px"
      width="1200px"
      mode="c_cpp"
      theme="monokai"
      name="blah2"
      onChange={setSourceCode}
      fontSize={18}
      showGutter={true}
      highlightActiveLine={true}
      value={sourceCode}
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
