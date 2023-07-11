import React from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import styles from './contact.module.css'

export default function Contact() {
    return (
        <Box className={styles.contact} >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Box>
                            <center>
                                <Typography className={styles.details} ><b> Let's get started</b> </Typography>
                                <Typography className={styles.detailh2} >Are you ready for a better, more <br /> productive business?</Typography> <br />
                                <Typography>Stop worrying about technology problems. Focus on your business. <br />
                                    Let us provide the support you deserve.</Typography>
                            </center>
                        </Box>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container >
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.msg} >
                            <Typography className={styles.write} >Write a message</Typography>
                            <Typography className={styles.msgdetails} >If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <form action="">
                            <Grid container className={styles.form} >
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <label className={styles.label} >Name:</label> <br />
                                    <input type='text' className={styles.input} class='name'  ></input>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <label className={styles.label}>Email:</label> <br />
                                    <input type='text' className={styles.input} class='name'  ></input>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >

                                    <label className={styles.label}>Subject:</label> <br />
                                    <input type='text' className={styles.input} class='name' ></input>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} >
                                    <br />
                                    <label className={styles.label}>Massage:</label> <br />
                                    <textarea name="" id="" cols="30" rows="10" className={styles.textarea} ></textarea>
                                </Grid>
                                <button className={styles.btn} >Send Massage</button>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
