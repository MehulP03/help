import { Box, Card, CardActionArea, CardContent, Container, Grid, Modal, Typography } from '@mui/material'
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


    const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const cards = daysWeek.map((name, index) => {
        return (
            <Grid item xs={4} sx={{ p: 3 }}>
                <CardActionArea onClick={handleOpen}>
                    <Card>
                        <CardContent>{name}</CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        );
    });

    return (
        <div>
            <Container>
                <Typography variant='h3' sx={{ color: '#fff' }}>Weekly Planner</Typography>

                <Grid container spacing={2} sx={{ pt: 10 }}>
                    {cards}
                </Grid>
                <Card>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                    >
                        <Box sx={style}>

                            <Task name = {'1'} />
                        </Box>
                    </Modal>
                </Card>
            </Container>
        </div>
    )
}

export default WeeklyPlanner