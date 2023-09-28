/* eslint-disable react/prop-types */
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from "@uiw/codemirror-theme-github"
import { python } from '@codemirror/lang-python';

const MyCodeEditor = (props) => {
  return (
    <CodeMirror
      {...props}
      theme={githubDark}
      extensions={props.highlight ? [python()] : []}
      basicSetup={{ tabSize: 4, ...props.basicSetup }}
      mode={"python"}
      minHeight={props.height ? props.height : '400px'}
    />
  );
};

export default MyCodeEditor;
