import React from 'react'
import { Button, Card, CardContent, Container, Typography } from '@mui/material'


function Task(props) {
  return (
    <div>
    <Container>
        <Card sx={{p:2, textAlign: 'center'}}>
            <CardContent>
                <Typography>Today Your task is</Typography>
            </CardContent>
                <Button variant="outlined"> Click Here</Button>
        </Card>
    Task {props.name}
    </Container>
    </div>
  )
}

export default Task