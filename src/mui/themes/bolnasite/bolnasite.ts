import { palette } from "./palette";

export const bolnasite = {
  palette: {
    background: {
      default: palette.neutrals.gray[100],
    },
    text: {
      primary: '#121212',
    },
    primary: {
      main: '#EE3536',
    },
    secondary: {
      main: '#8AC500',
    },
    error: {
      main: '#FF5733'
    },
    white: {
      main: '#FAFAFA'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutrals.white,
          color: '#212121'
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