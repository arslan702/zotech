import React from 'react';
import styles from './home.module.css'
// import Navbar from '../../Components/Navbar/Navbar'
import Services from '../../Components/Services/Services'
import Offer from '../../Components/Offer/Offer'
import Reason from '../../Components/Reasons/Reason'
import Steps from '../../Components/Steps/Steps'
import Framework from '../../Components/Framework/Framework'
import Contact from '../../Components/Contact/Contact'
import About from '../../Components/About/About'


export default function index() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className={styles.home} >
                <center>
                    <div className={styles.header} >
                        <h1>Transform Your Ideas to great <br/> products and Services </h1> <br />
                        <button className={styles.btn} ><b>Lets Connect!! </b></button>
                    </div>
                </center>
            </div>
            <br/>
            <br/>
            <br/>
            <Services />
            <br/>
            <br/>
            <About/>
            <br/>
            <br/>
            <Offer/>
            <br/>
            <br/>
            <Reason/>
            <br/>
            <br/>
            <Framework/>
           <br/>
           <br/>
           <br/>
           <Steps/>
           <br/>
           <br/>
           <br/>
           <Contact/>
        </div>
    )
}
