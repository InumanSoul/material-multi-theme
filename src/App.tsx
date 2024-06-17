import { Button, Card, CardActions, CardContent, Typography, useTheme } from "@mui/material"

function App() {
  const wrapperStyles = {
    display: 'flex', 
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: useTheme().palette.background.default,
  }

  return (
    <div style={wrapperStyles}>
      <Card variant="outlined" elevation={4}>
        <CardContent>
          <Typography variant="h5">Card Title</Typography>
          <Typography variant="body1" color={"GrayText"}>Card sample content</Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary" variant="outlined">Action 2</Button>
          <Button color="primary" variant="contained">Action 1</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default App
