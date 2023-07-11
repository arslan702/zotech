import '@/styles/globals.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Terms from '../pages/Terms/Terms'


export default function App({ Component, pageProps }) {
  return (
<>
    <Navbar/>
    {/* <Terms/> */}
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
