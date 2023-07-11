import React from 'react'
import styles from './about.module.css'
import { Box, Grid, Typography, Container } from '@mui/material';
import img from '../../Images/8.png';
import img1 from '../../Images/13.png';
import Image from "next/image";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



export default function index() {
    return (
        <div className={styles.about}   >
            <Container>
                <Grid container   >
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <br />
                        <br />
                        <h1 className={styles.header} >We provide
         solutions
for your business!</h1>
                        <br />
                        <div className={styles.text}>
                            <p>Our company doesn’t just develop products, we build, accelerate, and support your business.
Our company takes your idea, vision, or business goals and transforms them into a web app or an enterprise digital solution.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Box className={styles.box}   >
                            <Image src={img} className={styles.img} />
                        </Box>
                    </Grid>
                </Grid>
                <br />
                <br />

                <Box>
                    <center>
                        <h1 className={styles.text2} >  <b> About Us</b> </h1>
                        <br />
                        <p>We Have Best Software Developers Who Care About What You Want.</p>
                    </center>
                </Box>

                <Grid container  >
                    <Grid xs={12} sm={12} md={6} lg={6}>
                        <br />
                        <h6 className={styles.details}>You want to know you’re in good hands when you embark on an adventure like making or remaking your website. We are a team of experienced developers who understand that a website has to come together around the larger goals of your business. Our website design, content, and strategy experience are designed to present you coherently to the outside world in a way that engages your users. At the core of what we do are Web best practices.</h6>
                        <br />
                        <br />
                        <Box className={styles.box2}>
                            <Box className={styles.icons} >
                                <ShoppingBagIcon className={styles.icon} />
                            </Box>
                            <Box className={styles.textdetails}>
                                <b><h3 className={styles.head} >User Experience</h3></b>
                                <br />
                                <h6 className={styles.head2}>UX, as the name implies, is concerned with creating an immersive experience for the user while keeping costs of development and implementation under control. In the context of software development, user experience looks like something focused purely on design and entertainment.</h6>
                            </Box>
                        </Box>
                        <br />
                        <br />
                        <Box className={styles.box2}>
                            <Box className={styles.icons2} >
                                <ShoppingBagIcon className={styles.icon} />
                            </Box>
                            <Box className={styles.textdetails}>
                                <b><h3 className={styles.head} >Manage Products </h3></b>
                                <br />
                                <h6 className={styles.head2}>We use Agile method in our development so our client able to see updates with time. Agile software development refers to a group of software development methodologies based on iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams.</h6>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6}>
                    <Box className={styles.box}   >
                            <Image src={img1} className={styles.img2} />
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <br />
        </div>
    )
}
