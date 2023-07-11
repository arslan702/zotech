import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import styles from './terms.module.css'


export default function Terms() {
    return (
        <Box className={styles.terms} >
            <Box className={styles.termsImg} >
        <Container>
                <Box>
                    <Typography className={styles.termshead}>Company Terms & Conditions</Typography>
                </Box>
            </Container>
            </Box>
            <br/>
            <br/>
            <Container>
                <Box>
                    <Typography className={styles.h1} ><b>Terms of Use</b> </Typography>
                    <br/>
                    <Typography className={styles.h2} >Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using our website .
<br/> <br/>
Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
<br/> <br/>
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</Typography>
     <br/> <br/>
     <Typography className={styles.h1} ><b>DevCastles Property</b> </Typography>
     <br/>
     <Typography className={styles.h2} >The Service and its original content, features and functionality are and will remain the exclusive property of Intelliscence and its licensors.</Typography>
     <br/> <br/>
     <Typography className={styles.h1} ><b>Links to other Websites</b> </Typography>
     <br/>
     <Typography className={styles.h2} >Our Service may contain links to third-party web sites or services that are not owned or controlled by Intelliscence.
<br/> <br/>
DevCastles has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Intelliscence shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
<br/> <br/>
We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit</Typography>
<br/> <br/>
     <Typography className={styles.h1} ><b>Termination</b> </Typography>
     <br/>
     <Typography className={styles.h2} > We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
<br/> <br/>
All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</Typography>
       
<br/> <br/>
     <Typography className={styles.h1} ><b>Disclaimer</b> </Typography>
     <br/>
     <Typography className={styles.h2} >Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance. </Typography>

         
<br/> <br/>
     <Typography className={styles.h1} ><b>Governing Law</b> </Typography>
     <br/>
     <Typography className={styles.h2} > These Terms shall be governed and construed in accordance with the laws of Pakistan without regard to its conflict of law provisions.
<br/> <br/>
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service. </Typography>
         
         <br/> <br/>

              <Typography className={styles.h1} ><b>Contact Us</b> </Typography>
<br/>
<Typography className={styles.h2}>If you have any questions about these Terms, please contact us.</Typography>
        
        <br/>
        <br/>
           </Box>
            </Container>
        </Box>
    )
}
