

export default function Contact() {
    return (
        <>
            <div className="contact-page">

                <div className="contact-hero">
                    <h1>CONTACT US</h1>

                    <p>
                        We would love to hear from you
                    </p>
                </div>

                <div className="contact-container">

                    <div className="contact-info">

                        <h2>Get In Touch</h2>

                        <p>
                            Have questions about our beauty products?
                            Feel free to contact us anytime.
                            Our support team is always ready to help you.
                        </p>

                        <div className="info-box">
                            <h3>Email</h3>
                            <span>beautyshop@email.com</span>
                        </div>

                        <div className="info-box">
                            <h3>Phone</h3>
                            <span>+92 300 1234567</span>
                        </div>

                        <div className="info-box">
                            <h3>Location</h3>
                            <span>Pakistan</span>
                        </div>

                        <div className="info-box">
                            <h3>Working Hours</h3>
                            <span>Monday - Saturday</span>
                            <span>9:00 AM - 8:00 PM</span>
                        </div>

                    </div>

                    <div className="contact-form">

                        <h2>Send Message</h2>

                        <form>

                            <input
                                type="text"
                                placeholder="Enter Your Name"
                            />

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                            />

                            <textarea
                                placeholder="Write Your Message"
                            ></textarea>

                            <button>
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

                <div className="contact-bottom">

                    <h2>Beauty Begins With Confidence</h2>

                    <p>
                        Thank you for trusting our beauty products.
                        Your beauty and satisfaction are our priority.
                    </p>

                </div>

            </div>
        </>
    );
}