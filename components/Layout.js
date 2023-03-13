import Footer from './Footer'
import Navbar from './ResponsiveNavbar'
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