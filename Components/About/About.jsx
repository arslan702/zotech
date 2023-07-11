import React from 'react'
import { Box,Grid, Typography, Container  } from '@mui/material';
import Image from "next/image";
import styles from './about.module.css'
import img from '../../Images/about.png'

export default function About() {
    return (
        <Box className={styles.about} >
           <Container>
               <Grid container >
<Grid item xs={12} sm={12} md={6} lg={6} >
<Image src={img} className={styles.img} />
</Grid>
<Grid item xs={12} sm={12} md={6} lg={6}>
<Box className={styles.abouthead} >
<Typography className={styles.h1} ><b>About Our Company</b></Typography>
<Typography className={styles.h2}>We Provide The Best Web Development Services</Typography> <br/>
<Typography className={styles.h3} >We are growing a web design and online marketing agency that specializes in creating profitable, high-converting websites for Growing businesses.​ <br/> <br/>

We help you to grow your business with our custom website development services. With the increasing competition in the industry, it has become very important for small business owners to have an attractive and user-friendly website that appeals to their target audience. Our customized, web design solutions are designed with one objective generate leads and convert them into loyal customers.</Typography>
</Box>
</Grid>
               </Grid>
               </Container> 
        </Box>
    )
}
