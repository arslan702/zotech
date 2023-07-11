import React from 'react';
import { TextField, Box, MenuItem, Grid, Container, Typography, Card } from "@mui/material";
import styles from './service.module.css'
import Image from "next/image";
import img from '../../Images/1.png'
import img1 from '../../Images/2.png'
import img2 from '../../Images/3.png'



export default function Services() {
    return (
        <Box className={styles.services}  id='#services'   >
        <center>
<Box>
    <Typography variant='h4' className={styles.head} ><b>We design & build digital experiences that deliver results.</b> </Typography> <br/>
<Typography variant='h6' >As your Digital Transformation partner, we will be with you every step of the way – from initial <br/> planning to delivery, and beyond.</Typography>
</Box>
<br/>
<br/>
<Grid container >
<Grid item xs={12} sm={12} md={4} lg={4} >
<Box className={styles.card} >
<Box className={styles.imag} >
<Image src={img} className={styles.img} />
<br/>
<Typography className={styles.imgtext} ><b>Search engine optimization</b> </Typography>
<br/>
<Typography className={styles.text} >We create numerous products for organizations large and small across a variety of different sectors.</Typography>
</Box>
</Box>
</Grid>
<Grid item xs={12} sm={12} md={4} lg={4} >
<Box className={styles.card} >
<Box className={styles.imag} >
<Image src={img1} className={styles.img} />
<br/>
<Typography className={styles.imgtext} ><b>Web development</b> </Typography>
<br/>
<Typography className={styles.text} >We excel in delivering the best-suited web solutions as per the custom needs across varied industries.</Typography>
</Box>
</Box>
</Grid>
<Grid item xs={12} sm={12} md={4} lg={4} >
<Box className={styles.card} >
<Box className={styles.imag} >
<Image src={img2} className={styles.img} />
<br/>
<Typography className={styles.imgtext} ><b>Essay Writing</b> </Typography>
<br/>
<Typography className={styles.text} >We’ll help you envision the concept, user-experience, as well as building a world-class mobile app that fits the purpose.</Typography>
</Box>
</Box>
</Grid>

</Grid>
        </center>
        </Box>
    )
}
