import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date }) => {

    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (

        <>
            <Grid item xs={12} sm={6} md={4}>

                <Paper elevation={3} sx={{ py: 4 }} >
                    <Typography style={{ color: '#2FC0AC', fontWeight: 'bold' }} variant='h6'>{name}</Typography>
                    <Typography variant='body1'>{time}</Typography>
                    <Typography style={{ color: '#2FC0AC' }} variant='caption'>{space} SPACES AVAILAVLE</Typography> <br /> <br />
                    <Button
                        onClick={handleBookingOpen}
                        style={{ backgroundColor: '#2FC0AC', color: 'white' }}>Booking Now</Button>
                </Paper>
            </Grid>
            <BookingModal
                openBooking={openBooking}
                handleBookingOpen={handleBookingOpen}
                handleBookingClose={handleBookingClose}
                booking={booking}
                date={date}
            ></BookingModal>
        </>

    );
};

export default Bookings;