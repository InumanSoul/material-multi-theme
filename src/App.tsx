import { AppBar, Button, Chip, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useTheme } from "@mui/material"
import { MdAccountCircle, MdArrowBack, MdBook, MdCalendarMonth, MdList, MdPlayCircleFilled, MdSearch, MdViewComfy } from "react-icons/md"
import { palette } from "./mui/themes/bolnasite/palette"
import { useState } from "react";
import MainMenu from "./components/MainMenu";

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

function App() {
  const [sideMenu, setSideMenu] = useState(false)
  const wrapperStyles = {
    backgroundColor: useTheme().palette.background.default,
  }

  const asideStyles = {
    backgroundColor: palette.neutrals.gray[800],
    color: palette.neutrals.gray[100],
    padding: '0.5rem',
    height: 'calc(100vh - 75px)',
    width: sideMenu ? '265px' : '86px',
    transition: 'width 0.35s ease-in-out',
  }

  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  return (
    <div style={wrapperStyles}>
      <AppBar position="sticky">
        <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between', }}>
          <Typography variant="h6" component="h6">
            BRAND
          </Typography>
          <MainMenu />
          <Stack spacing={1} direction="row" alignItems={'center'}>
            <Chip avatar={<MdAccountCircle size={24} />} clickable label={'$ 100.000'} variant="outlined" color="white"></Chip>
            <Button variant="contained" color="secondary">Deposit</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <aside style={asideStyles}>
        <Stack spacing={1} direction="column" boxShadow={0}>
          <Button variant="text" color="inherit" disableElevation fullWidth onClick={handleSideMenu}>
            <MdArrowBack size={24} />
            {
              sideMenu && 'Hide menu'
            }
          </Button>
          <Button variant="outlined" color="inherit" fullWidth>
            <MdSearch size={24} />
            {
              sideMenu && 'Search'
            }
          </Button>
          <Button variant="outlined" color="inherit" fullWidth>
            <MdPlayCircleFilled size={24} />
            {
              sideMenu && 'Play Random'
            }
          </Button>
        </Stack>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <MdViewComfy size={24} />
            </ListItemIcon>
            {
              sideMenu && <ListItemText primary="Overview" />
            }
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MdList size={24} />
            </ListItemIcon>
            {
              sideMenu && <ListItemText primary="Event view" />
            }
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MdCalendarMonth size={24} />
            </ListItemIcon>
            {
              sideMenu && <ListItemText primary="Calendar" />
            }
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MdBook size={24} />
            </ListItemIcon>
            {
              sideMenu && <ListItemText primary="Rules" />
            }
          </ListItemButton>
        </List>
      </aside>
    </div>
  )
}

export default App
