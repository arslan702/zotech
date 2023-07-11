import React from 'react';
import styles from './offer.module.css'
import img from '../../Images/offer.png'
import { TextField, Box, MenuItem, Grid, Container, Typography, Card } from "@mui/material";
import Image from "next/image";
import DoneIcon from '@mui/icons-material/Done';


export default function Offer() {
    return (
        <Box>
            <Container>
          <Grid container >
              <Grid item xs={12} sm={12} md={6} lg={6} >
              <br/>
              <br/>
              <br/>
             <Box>
                 <Typography variant='h3' className={styles.head} >What We Offer</Typography> <br/>
                 <Typography>A complete solution to meet your tech challenges.</Typography>
                 <br/>
                 <Box className={styles.box} >
               <span className={styles.icon} ><DoneIcon/></span><Typography className={styles.detail} > <b>Product Refinement</b> </Typography>
               </Box>
                 <br/>
                 <Box className={styles.box} >
                 <span className={styles.icon} ><DoneIcon/></span><Typography className={styles.detail}> <b>Domain Experts</b> </Typography>
                 </Box>
                 <br/>
                 <Box className={styles.box} >
                 <span className={styles.icon} ><DoneIcon/></span><Typography className={styles.detail}> <b>Quality Documentation</b> </Typography>
                 </Box>
                 <br/>
                 <Box className={styles.box} >
                 <span className={styles.icon} ><DoneIcon/></span><Typography className={styles.detail}> <b>Progress Tracking</b> </Typography>
                 </Box>
                 <br/>
                 <Box className={styles.box} >
                 <span className={styles.icon} ><DoneIcon/></span><Typography className={styles.detail}> <b>On-Time Delivery</b> </Typography>
                 </Box>
             </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
<Image src={img} className={styles.img} />

              </Grid>
              </Grid> 
              </Container> 
        </Box>
    )
}
