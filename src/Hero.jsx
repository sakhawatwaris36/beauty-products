import { useEffect } from "react"

import Card from "./Card"

import img1 from './assets/pic1.webp'
import img2 from './assets/pic2.webp'
import img3 from './assets/pic3.webp'
import img4 from './assets/pic4.jpg'


import img6 from './assets/pic6.webp'

export default function Hero() {

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-anim");

    const handleScroll = () => {
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hero">

        <div className="h1">
          <h1 className="wel fade-in">
            Welcome to &nbsp;&nbsp;&nbsp;
            <p className="our">our website .</p>
            <span className="glow fade-in delay-1">Glow starts here .</span>
          </h1>

          <p className="pra fade-in delay-2">
            "Your Skin Deserves the Best Glow ✨"
          </p>
        </div>

        <div className="h2">
          <div className="pho">
            <img src="cream.jpg" alt="" className="img fade-in delay-2" />
          </div>
        </div>

      </div>

      <div className="container">
        <h1 className="clogo scroll-anim">Branded Sample</h1>

        <div className="c2">
          <Card pic={img1} />
          <Card pic={img2} />
          <Card pic={img3} />
          <Card pic={img4} />
          
          <Card pic={img6} />
        </div>

        <div className="bc">
         <a href="Product"> <button className="see scroll-anim">see all products</button></a>
        </div>
      </div>

      <div className="container2">

        <div className="inlogo">
          <h1 className="infor scroll-anim">
            Information for <p>products</p>
          </h1>
        </div>

        <div className="mainin">

          <div>
            <h2 className="scroll-anim">🧴 Face Wash Instructions</h2>
            <p className="scroll-anim">
              • Face ko halka sa wet karein
              <p>• Thodi si quantity le kar gently massage karein </p>
              <p>• 20–30 seconds tak circular motion me use karein</p>
              <p>• Clean water se wash kar lein </p>
              <p>• Din me 2 dafa use karein</p>
            </p>
          </div>

          <div>
            <h2 className="scroll-anim">💧 Serum Instructions</h2>
            <p className="scroll-anim">
              • Face wash ke baad clean skin par apply karein
              <p>• 2–3 drops hi kaafi hoti hain</p>
              <p>• Light tapping se absorb hone dein</p>
              <p>• Eyes ke andar na lagayen </p>
              <p>• Daily use karein</p>
            </p>
          </div>

          <div>
            <h2 className="scroll-anim">🧴 Cream / Moisturizer Instructions</h2>
            <p className="scroll-anim">
              • Serum ke baad apply karein
              <p>• Thodi si amount le kar face par evenly spread karein</p>
              <p>• Gently massage karein</p>
              <p>• Morning & night use karein</p>
            </p>
          </div>

          <div>
            <h2 className="scroll-anim">⚠️ General Tips</h2>
            <p className="scroll-anim">
              • Pehle patch test zaroor karein
              <p>• Direct sunlight se bach kar rakhein</p>
              <p>• Eyes ke contact se avoid karein</p>
              <p>• Irritation ho to use band kar dein</p>
            </p>
          </div>

        </div>
      </div>

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
  )
}