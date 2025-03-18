import "../css/Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>Order<span className="highlight">.uk</span></h1>
          <div className="app-buttons">
            <button className="app-button">App Store</button>
            <button className="app-button">Google Play</button>
          </div>
          <p>Company # 490039-445, Registered with House of companies.</p>
        </div>

        <div className="footer-subscribe">
          <h2>Get Exclusive Deals in your Inbox</h2>
          <div className="subscribe-box">
            <input type="email" placeholder="youremail@gmail.com" />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <p>we won’t spam, read our <a href="#">email policy</a></p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Legal Pages</h3>
            <a href="#">Terms and conditions</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Modern Slavery Statement</a>
          </div>
          <div>
            <h3>Important Links</h3>
            <a href="#">Get help</a>
            <a href="#">Add your restaurant</a>
            <a href="#">Sign up to deliver</a>
            <a href="#">Create a business account</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Order.uk Copyright 2025, All Rights Reserved to Shashank.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Pricing</a>
          <a href="#">Do not sell or share my personal information</a>
        </div>
      </div>
      
    </footer>
  )
}
