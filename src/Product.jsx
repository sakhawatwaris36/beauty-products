import Header from "./Header";
import Card from "./Card";

import { motion } from "framer-motion";
import { style } from "framer-motion/client";
import img1 from './assets/pic1.webp'
import img2 from './assets/pic2.webp'
import img3 from './assets/pic3.webp'
import img4 from './assets/pic4.jpg'
import img5 from './assets/pic5.webp'
import img6 from './assets/pic6.webp'


export default function Product() {
    return (
        <>
            <Header />

            <motion.div
                className="prodiv"
                
                initial={{ opacity: 0, y: 100 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 1 }}

                viewport={{ once: true }}
            >
                <Card pic={img1} />
                <Card pic={img1} />
                <Card pic={img1} />
                         <Card pic={img2} />
                         <Card pic={img2} />
                         <Card pic={img2} />
                         <Card pic={img2} />
                         <Card pic={img3} />
                         <Card pic={img3} />
                         <Card pic={img3} />
                         <Card pic={img3} />
                         <Card pic={img4} />
                         <Card pic={img4} />
                         <Card pic={img4} />
                         <Card pic={img4} />
                         <Card pic={img5} />
                         <Card pic={img5} />
                         <Card pic={img5} />
                         <Card pic={img5} />
                         <Card pic={img6} />
                         <Card pic={img6} />
                         <Card pic={img6} />
                         <Card pic={img6} />
                         <Card pic={img6} />

               
            </motion.div>
            
             
             <footer className="footer">
        <div className="footer-container">

          <div className="footer-box scroll-anim">
            <h2>About Us</h2>
            <p>Hum ek modern web development service provide karte hain.</p>
          </div>

          <div className="footer-box scroll-anim">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="footer-box scroll-anim">
            <h2>Contact</h2>
            <p>Email: info@gmail.com</p>
            <p>Phone: +92 300 1234567</p>
          </div>

        </div>

        <div className="footer-bottom scroll-anim">
          <p>© 2026 Your Website | All Rights Reserved</p>
        </div>
      </footer>
        </>
    );
}