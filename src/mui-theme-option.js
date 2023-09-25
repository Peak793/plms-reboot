export const themeOptions = {
  typography: {
    fontFamily: [
      'Kanit',
    ].join(',')
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#0Ca6e9',
      dark: '#0e5076',
      light: '#00c1ff',
    },
    secondary: {
      main: '#f50057',
      light: '#ffffff',
      dark: '#ab003c',
    },
    text: {
      secondary: '#737984',
      primary: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    divider: 'rgba(255,255,255,0.2)',
    background: {
      paper: '#1D283A',
      default: '#0f1729',
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
      color: "white",
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',  // this will be the default color
      },
      styleOverrides: {
        root: {
          color: "white",
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--raven)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          background: "var(--raven)",
          transform: "scaleY(2) scaleX(1.55)"
        },
        thumb: {
          background: "white",
          transform: "scale(1.1)"
        },
        switchBase: {
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: 'success.main',
            opacity: 1.0,
          },
        },
      }
    }
  }
};