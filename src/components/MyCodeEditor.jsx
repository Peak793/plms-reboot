/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from "@uiw/codemirror-theme-github"
import { python } from '@codemirror/lang-python';

const MyCodeEditor = ({ highlight, basicSetup, height, ...props }) => {
  return (
    <CodeMirror
      {...props}
      theme={githubDark}
      extensions={highlight ? ([python()]) : ([])}
      basicSetup={{ tabSize: 4, ...basicSetup }}
      mode={"python"}
      minHeight={height ? height : '400px'}
    />
  );
};

export default MyCodeEditor;
