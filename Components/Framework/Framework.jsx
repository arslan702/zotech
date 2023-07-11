import React from 'react'
import { Box } from '@mui/system';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Image from "next/image";
import img from '../../Images/7.png'
import styles from './frame.module.css';
import DoneIcon from '@mui/icons-material/Done';



export default function Framework() {
    return (
        <Box className={styles.frame} >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Box className={styles.image} >
                            <Image src={img} className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={styles.work} >
                            <Typography className={styles.head} ><b>Our Collaboration Framework</b> </Typography>
                            <br />
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 1:</b> </Typography>
                                <Typography className={styles.details} >Define Products Ideas And Business Goals</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 2:</b> </Typography>
                                <Typography className={styles.details} >Product Idea Validation</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 3:</b> </Typography>
                                <Typography className={styles.details} >Elicit Product Functional And Non-functional Requirements</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 4:</b> </Typography>
                                <Typography className={styles.details} >Assure Software Product Qualitys</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 5:</b> </Typography>
                                <Typography className={styles.details} >Develop The Product And User Experience</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 6:</b> </Typography>
                                <Typography className={styles.details} >Design A Cost-effective Custom Technical Solution</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 7:</b> </Typography>
                                <Typography className={styles.details} >Ensure A Successful Product Launch</Typography>
                            </Box>
                            <Box className={styles.boxes} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Typography className={styles.step} ><b>Step 8:</b> </Typography>
                                <Typography className={styles.details} >Maintain And Improve The Product</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
