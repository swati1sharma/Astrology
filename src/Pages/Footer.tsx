import "./Style/Footer.css"
export default function Footer() {
  return (
    <div className="footer-container">

      <div className="footer-item">
        <h3>About Dr. Vinay Sharma</h3>
        <p>
          One should know how to judge a good astrologer than going by the name.
          The best astrologer is the one who believes more in Astrology based on the Karmic theory
          than only following rituals and remedies.
          <a href="#" className="know-more">Know More...</a>
        </p>
      </div>

      <div className="footer-item quick-points">
        <h3>Quick points</h3>
        <ul>
          <li>Free Daily Horoscope</li>
          <li>Free Kundli</li>
          <li>Kundli Matching</li>
          <li>Today Panchang</li>
          <li>Free Astrology Calculators</li>
          <li>Astrology News</li>
          <li>Upcoming Visits</li>
          <li>Karma Astro Mobile App</li>
        </ul>
      </div>  
      
      <div className="footer-item astrology-services">
        <h3>Astrology Services</h3>
        <ul>
          <li>Consultation</li>
          <li>Online Report</li>
          <li>Voice Report</li>
          <li>Marriage Astrology</li>
          <li>Business Astrology</li>
          <li>Birth Time Rectification</li>
          <li>Past Life Readings</li>
          <li>Career Astrology</li>
        </ul>
      </div>
      <div className="footer-item contact-info">
        <h3>Our Office</h3>
        <p>M-20, Sector-43, Indore, Madhya Pradesh-20301</p>
        <p>+91-123445890</p>
        <p>mail@vinay.com</p>
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Payment Terms & Conditions</li>
        </ul>
      </div>
    </div>
  )
}
