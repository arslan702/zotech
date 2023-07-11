import React from 'react'
import styles from './footer.module.css'
import { TextField, Box, MenuItem, Grid, Container, Typography, Card } from "@mui/material";
import Image from "next/image";
import logo from '../../Images/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Footer() {
    return (
        <>
            <Box className={styles.footer} >
                <br />
                <br />
                <Container>
                    <Grid container >
                        {/* <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Image src={logo} className={styles.img} />
                        </Grid> */}
                        <br />
                        <br />
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.links}>
                                <Typography className={styles.link}><b> Quick links</b></Typography> <br />
                                <Typography className={styles.link}>About</Typography> <br />
                                <Typography className={styles.link}>Services</Typography> <br />
                                <Typography className={styles.link}>Contact Us</Typography> <br />
                                <Typography className={styles.link}>Privacy policy</Typography> <br />
                                <Typography className={styles.link}>Terms & Conditions</Typography> <br />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box className={styles.contact} >
                                <Typography><b>Contact</b></Typography> <br />
                                <Box className={styles.icons} >
                                    <Typography className={styles.icon}><EmailIcon /> </Typography>
                                    <Typography className={styles.name} >aliassaan@gmail.com</Typography>
                                </Box>
                                <br />
                                <Box className={styles.icons} >
                                    <Typography className={styles.icon}><WhatsAppIcon /> </Typography>
                                    <Typography className={styles.name} >+923085979960</Typography>
                                </Box>
                                <br />
                                <Box className={styles.icons} >
                                    <Typography className={styles.icon}><LocationOnIcon /> </Typography>
                                    <Typography className={styles.name} >M.A Jinah Rd.Okara</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Box className={styles.hr} ></Box>
                    <br/>
                    <br/>
                    <center>
                        <Typography className={styles.foot} >© 2023 ZoTech</Typography>
                    </center>
                    <br/>
                    <br/>
                </Container>
            </Box>
        </>
    )
}
