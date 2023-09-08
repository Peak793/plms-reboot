import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyTextEditor = ({ value, onChange, placeholder }) => {

  const toolbarOptions = [
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons              // custom button values
    [{ 'align': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    ['blockquote', 'code-block'],                       // text direction

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

    ['clean'],                                         // remove formatting button
  ];

  useEffect(() => {
    const tooltips = [
      'Font Size', 'Header', 'Bold', 'Italic', 'Underline', 'Strike', 'Alignment',
      'Ordered List', 'Bullet List', 'Outdent', 'Indent', 'Subscript', 'Superscript',
      'Blockquote', 'Code Block', 'Text Color', 'Background Color', 'Clear Formatting'
    ];

    setTimeout(() => {
      const buttons = document.querySelectorAll('.ql-toolbar button, .ql-toolbar .ql-picker-label');

      buttons.forEach((button, index) => {
        button.setAttribute('title', tooltips[index] || '');
      });
    }, 0);
  }, []);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder={placeholder}  // Set the placeholder
      modules={{ toolbar: toolbarOptions }}
    />
  );
};

MyTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string  // Prop validation for placeholder
};

export default MyTextEditor;
