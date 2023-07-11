import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import styles from './step.module.css'
import { Container } from '@mui/system';
import Image from "next/image";
import img from '../../Images/4.png';
import img1 from '../../Images/5.png';
import img2 from '../../Images/6.png';



export default function Steps() {
    return (
        <Box className={styles.step} >
            <Container>
                <center>
                    <Typography className={styles.header} ><b>3 Easy Steps to Get Started</b> </Typography>
                </center>
                <br />
                <Grid container >
                    <Grid item xs={12} sm={12} md={4} lg={4} className={styles.box} >
                        <center>
                            <Image src={img} className={styles.img} />
                            <br />
                            <Typography><b>Define Your Requirements</b></Typography>
                            <br />
                            <Typography className={styles.text} >Share what you want to achieve with your product.</Typography>
                        </center>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={styles.box} >
                        <center>
                            <Image src={img1} className={styles.img} />
                            <br />
                            <Typography><b>Estimation call</b></Typography>
                            <br />
                            <Typography className={styles.text} >Discuss the work model, costing, purpose, requiremnets and timeline.</Typography>
                        </center>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={styles.box} >
                        <center>
                            <Image src={img2} className={styles.img} />
                            <br />
                            <Typography><b>Start Building</b></Typography>
                            <br />
                            <Typography className={styles.text} >Jump start the product development with Datics while you focus on the bigger goals.</Typography>
                        </center>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
