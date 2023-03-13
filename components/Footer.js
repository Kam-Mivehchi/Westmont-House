import React from 'react'
import styles from '../styles/Footer.module.css'
import { IconContext } from "react-icons";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelopeOpen, FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
   return (
      <footer className={styles.footerSection}>
         <div className={styles.container}>
            <div className={styles.footerCta}>
               <div className={styles.grid}>
                  <div className={styles.quickLinks}>
                     <div className={styles.singleCta}>
                        <IconContext.Provider value={{
                           color: 'purple',
                           size: '30px',
                           style: { marginTop: '8px' }
                        }}>

                           <FaMapMarkerAlt />
                        </IconContext.Provider>
                        <div className={styles.ctaText}>
                           <h4>Find us</h4>
                           <span>1010 Avenue, sw 54321, chandigarh</span>
                        </div>
                     </div>
                  </div>
                  <div className={styles.quickLinks}>
                     <div className={styles.singleCta}>
                        <IconContext.Provider value={{
                           color: 'purple',
                           size: '30px',
                           style: { marginTop: '8px' }
                        }}>

                           <FaPhoneAlt />
                        </IconContext.Provider>
                        <div className={styles.ctaText}>
                           <h4>Call us</h4>
                           <span>9876543210 0</span>
                        </div>
                     </div>
                  </div>
                  <div className={styles.quickLinks}>
                     <div className={styles.singleCta}>
                        <IconContext.Provider value={{
                           color: 'purple',
                           size: '30px',
                           style: { marginTop: '8px' }
                        }}>

                           <FaEnvelopeOpen />
                        </IconContext.Provider>
                        <div className={styles.ctaText}>
                           <h4>Mail us</h4>
                           <span>mail@info.com</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.footerContent}>
               <div className={styles.grid}>
                  <div className={styles.footerMain}>
                     <div className={styles.footerWidget}>
                        <div className={styles.footerLogo}>
                           <a href="index.html"><img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg" className="img-fluid" alt="logo" /></a>
                        </div>
                        <div className={styles.footerText}>
                           <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                              elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={styles.footerSocialIcon}>
                           <span>Follow us</span>
                           <IconContext.Provider value={{
                              color: 'blue',
                              size: '60px',

                              style: { marginBottom: '8px', lineHeight: '38px', }
                           }}>
                              <FaFacebook />
                           </IconContext.Provider>

                           <IconContext.Provider value={{
                              color: '1D9BF0',
                              size: '60px',

                              style: { marginBottom: '8px', lineHeight: '38px', }
                           }}>

                              <AiFillTwitterCircle />
                           </IconContext.Provider>

                        </div>
                     </div>
                  </div>
                  <div className={styles.footerMain}>
                     <div className={styles.footerWidget}>
                        <div className={styles.footerWidgetHeading}>
                           <h3>Useful Links</h3>
                        </div>
                        <ul className={styles.list}>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">about</a></li>
                           <li><a href="#">services</a></li>
                           <li><a href="#">portfolio</a></li>
                           <li><a href="#">Contact</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Our Services</a></li>
                           <li><a href="#">Expert Team</a></li>
                           <li><a href="#">Contact us</a></li>
                           <li><a href="#">Latest News</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className={styles.footerMain}>
                     <div className={styles.footerWidget}>
                        <div className={styles.footerWidgetHeading}>
                           <h3>Subscribe</h3>
                        </div>
                        {/* mb-25 */}
                        <div className={styles.footerText}>
                           <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div className={styles.subscribeForm}>
                           <form action="#">
                              <input type="text" placeholder="Email Address" />
                              <button>
                                 <IconContext.Provider value={{
                                    color: '1D9BF0',
                                    size: '22px',


                                 }}>

                                    <FaTelegramPlane />
                                 </IconContext.Provider>

                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div >
         <div className={styles.copyrightArea}>
            <div className={styles.container}>
               <div className={styles.grid}>
                  <div className={styles.cpLeft}>
                     <div className={styles.copyrightText}>
                        <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                     </div>
                  </div>
                  <div className={styles.cpRight}>
                     <div className={styles.footerMenu}>
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Terms</a></li>
                           <li><a href="#">Privacy</a></li>
                           <li><a href="#">Policy</a></li>
                           <li><a href="#">Contact</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer >
   )
}

export default Footer