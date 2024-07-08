import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'

const CardExample = () => {
  return (
    <div>
      Card component example

      <Card elevation={1}>
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

export default CardExample 