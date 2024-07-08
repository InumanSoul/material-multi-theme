import { palette } from "./palette";

export const superSlots = {
  palette: {
    background: {
      default: '#3A0B4A',
    },
    text: {
      primary: '#FEFEFE',
    },
    primary: {
      main: '#ffdf00',
    },
    secondary: {
      main: '#466aca',
    },
    error: {
      main: '#FF5733'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#52015B',
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