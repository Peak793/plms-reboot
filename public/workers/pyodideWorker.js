self.importScripts('../pyodide/pyodide.js');

async function initializePyodide() {
  try {
    if (typeof self.loadPyodide === 'function') {
      self.pyodide = await self.loadPyodide();
      self.postMessage({ status: 'initialized', message: "Pyodide is initialized", result: null });
    } else {
      throw new Error('loadPyodide function is not available.');
    }
  } catch (error) {
    self.postMessage({ status: 'error', message: 'Failed to initialize Pyodide.', result: null });
  }
}

initializePyodide();

self.onmessage = (event) => {
  if (!self.pyodide) {
    self.postMessage({ status: 'error', message: 'Pyodide is not initialized.', result: null });
    return;
  }

  const { pythonCode } = event.data;

  let response;
  try {
    // Set up StringIO and redirect stdout
    self.pyodide.runPython(`
      import sys
      import io
      stdout_backup = sys.stdout
      sys.stdout = io.StringIO()
    `);

    // Execute the user's code
    self.pyodide.runPython(pythonCode);

    // Capture and reset stdout
    const output = self.pyodide.runPython(`
      output = sys.stdout.getvalue()
      sys.stdout = stdout_backup
      output
    `);

    response = { ...JSON.parse(output) };
  } catch (error) {
    response = { status: 'error', message: error.message, result: null };
  }

  self.postMessage(response);
};
