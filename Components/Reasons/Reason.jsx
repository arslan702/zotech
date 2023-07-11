import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import styles from './reason.module.css'
import Grid from '@mui/system/Unstable_Grid';

export default function Reason() {
    return (
        <Box className={styles.reason} >
            <Container>
                <Box className={styles.header} >
                    <br /> <br /> <br />
                    <Typography className={styles.headh1}>6 Reasons to Choose DevCastles</Typography>
                    <br />
                    <Typography className={styles.headh4} >We have helped out multiple businesses across several industries to reach <br /> new heights with our custom software development services, and you could <br /> be the next!</Typography>
                </Box>
                <br />
                <Grid container >
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.box} >
                            <Typography className={styles.count} ><b>01.</b> </Typography>
                            <br /> <br />
                            <Typography className={styles.text} ><b>Top Professionals</b></Typography>
                            <br />
                            <Typography className={styles.headh4} >Our vetted agile product development team of professionals build top-notch products.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.box} >
                            <Typography className={styles.count} ><b>02.</b> </Typography>
                            <br /> <br />
                            <Typography className={styles.text} ><b>Cost Effective</b></Typography>
                            <br />
                            <Typography className={styles.headh4} >We offer low cost and customized service plans so you pay for what you get.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.box} >
                            <Typography className={styles.count} ><b>03.</b> </Typography>
                            <br /> <br />
                            <Typography className={styles.text} ><b>Scalable</b></Typography>
                            <br />
                            <Typography className={styles.headh4} >Our go as you grow model gives you the flexibility to scale as per your need.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.box} >
                            <Typography className={styles.count} ><b>04.</b> </Typography>
                            <br /> <br />
                            <Typography className={styles.text} ><b>IP Ownership </b></Typography>
                            <br />
                            <Typography className={styles.headh4} >Get 100% ownership and license agreement for your products built by Dev Castles.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.box} >
                            <Typography className={styles.count} ><b>05.</b> </Typography>
                            <br /> <br />
                            <Typography className={styles.text} ><b>High Product Quality</b></Typography>
                            <br />
                            <Typography className={styles.headh4} >We eliminate delays and bugs before they happen with code reviews, maintaining an amazing customer experience .</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Box className={styles.box} >
                            <Typography className={styles.count} ><b>06.</b> </Typography>
                            <br /> <br />
                            <Typography className={styles.text} ><b>Free Consultation</b></Typography>
                            <br />
                            <Typography className={styles.headh4} >Schedule a free consultation meeting and 5 hours credit to dicuss your product details without any commitment.</Typography>
                        </Box>
                    </Grid>
                   
                </Grid>
            </Container>
        </Box>
    )
}
