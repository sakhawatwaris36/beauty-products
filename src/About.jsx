
export default function About() {
    return (
        <>
            <div className="about-page">

                <div className="about-hero">
                    <h1>ABOUT US</h1>

                    <p>
                        Enhancing Your Natural Beauty With Premium Products
                    </p>
                </div>

                <div className="about-container">

                    <div className="about-content">
                        <h2>Who We Are</h2>

                        <p>
                            We are passionate about beauty, skincare and self-care.
                            Our goal is to provide high-quality beauty products that
                            help people feel confident, stylish and beautiful every day.
                        </p>

                        <p>
                            We carefully select modern and skin-friendly products
                            to ensure comfort, quality and customer satisfaction.
                        </p>
                    </div>

                    <div className="about-photo">
                        <img
                            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                            alt="Beauty Products"
                        />
                    </div>

                </div>

                <div className="about-services">

                    <div className="service-card">
                        <h3>High Quality</h3>

                        <p>
                            Premium beauty products made with care and quality.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Skin Friendly</h3>

                        <p>
                            Safe and comfortable products for everyday use.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Affordable Price</h3>

                        <p>
                            Modern beauty collection at affordable prices.
                        </p>
                    </div>

                </div>

                <div className="about-mission">

                    <h2>Our Mission</h2>

                    <p>
                        Our mission is to make beauty simple, affordable and
                        accessible while helping everyone feel confident in
                        their natural beauty.
                    </p>

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

            </div>
        </>
    );
}