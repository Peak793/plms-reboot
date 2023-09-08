import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from "@uiw/codemirror-theme-github"
import { python } from '@codemirror/lang-python';

const MyCodeEditor = (props) => {
  return (
    <CodeMirror
      {...props}
      theme={githubDark}
      extensions={[python()]}
      mode={"python"}
      height='400px'
    />
  );
};

export default MyCodeEditor;
