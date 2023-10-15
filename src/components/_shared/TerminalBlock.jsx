/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const TerminalBlock = ({ text }) => {

  const terminalStyle = {
    whiteSpace: 'pre', // Preserve whitespace and line breaks
    fontFamily: 'monospace', // Use a monospaced font
    padding: '10px', // Add some padding for better visibility
    bgcolor: '#0d1117', // Background color for the terminal block
    color: '#FFF', // Text color
    tabSize: '4',
    minHeight: "150px"
  };

  return (
    <Box sx={terminalStyle}>
      {text}
    </Box>
  );
};

export default TerminalBlock