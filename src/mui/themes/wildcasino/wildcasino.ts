import { palette } from "./palette";

export const wildCasino = {
  palette: {
    background: {
      default: '#121212',
    },
    text: {
      primary: '#FEFEFE',
    },
    primary: {
      main: '#70bf45',
    },
    secondary: {
      main: '#fd9923',
    },
    error: {
      main: '#FF5733'
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#212121',
          color: '#FEFEFE'
        }  
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutrals.gray[800],
          color: palette.neutrals.gray[100],
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides:{
        root: {
          color: palette.neutrals.white,
        }
      }
    },
    MuiAppBar: {
      styleOverrides:{
        root: {
          backgroundColor: palette.neutrals.gray[800],
          color: palette.neutrals.gray[100],
        }
      }
    },
  }, 
};