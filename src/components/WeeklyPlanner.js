import { Card, CardActionArea, CardContent, Container, Grid, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import Task from './Task';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function WeeklyPlanner() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Container>
                <Typography variant='h3' sx={{ color: '#fff' }}>Weekly Planner</Typography>
                <Grid container spacing={2} sx={{ pt: 10 }}>
                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen}>
                            <Card>
                                <CardContent>Monday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen}>
                            <Card >
                                <CardContent>Tuesday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen} >
                            <Card >
                                <CardContent>Wednesday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen} >
                            <Card >
                                <CardContent>Thrusday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen} >
                            <Card >
                                <CardContent>Friday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen}>
                            <Card >
                                <CardContent>Saturday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={4} sx={{ p: 3 }}>
                        <CardActionArea onClick={handleOpen} >
                            <Card >
                                <CardContent>Sunday</CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                >
                    {/* <Fade in={open}> */}
                    <Box sx={style}>
                        <Task name={"1"}/>
                    </Box>
                    {/* </Fade> */}

                </Modal>
            </Container>
        </div>
    )
}

export default WeeklyPlanner