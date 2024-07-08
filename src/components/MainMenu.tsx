import { MenuItem, MenuList } from "@mui/material"

const MainMenu = () => {
  return (
    <MenuList sx={{ display: "flex"}}>
      <MenuItem selected>Sports</MenuItem>
      <MenuItem>Live Betting</MenuItem>
      <MenuItem>Casino</MenuItem>
      <MenuItem>Racebook</MenuItem>
      <MenuItem>Poker</MenuItem>
      <MenuItem>Esports</MenuItem>
      <MenuItem>Contest</MenuItem>
      <MenuItem>VIP Rewards</MenuItem>  
      <MenuItem>Promos</MenuItem>
    </MenuList>
  )
}

export default MainMenu