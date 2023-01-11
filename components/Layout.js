import Footer from './Footer'
import Navbar from './Navbar'
import Banner from './Banner'


const Layout = ({ children }) => {
   return (
      <>
         <header>
            <Banner />
            <Navbar />
         </header>
         <main>{children}</main>
         <Footer />
      </>
   )

}

export default Layout