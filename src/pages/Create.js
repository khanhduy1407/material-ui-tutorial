import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom>
        Create a new site
      </Typography>

      <Button
        onClick={() => console.log("you click me")}
        type="submit"
        color="secondary"
        variant="contained">
        Submit
      </Button>

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  )
}
