import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./Style/About.css";
import Footer from "./Footer";
import astr from "../Images/astr.png"

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Profile Section */}
      <Card className="profile-card">
  <div className="profile-card-content">
    <div className="about_profile_details">
      <img src={astr} alt="Astrologer" className="profile-image" />
      <h2>Vedika</h2>
      <p className="username">@vedika1650 • Astrology</p>
      <p className="join-date">📅 Joined December 2024</p>
    </div>
    <div className="stats">
      <span>189 Followers</span>
      <span>0 Following</span>
      <span>0 Views</span>
    </div>
  </div>
</Card>


      {/* About Me Section */}
      <Card className="about-section">
        <h3>About Me</h3>
        <p>Experienced astrologer with 4+ years of expertise in Vedic astrology.</p>
        <div className="info-boxes">
          <div className="info-box">🏆 Experience: 4 Years</div>
          <div className="info-box">🌍 Languages: Hindi, English</div>
        </div>
      </Card>

      {/* Achievements & Recognitions */}
      <Card className="awards-section">
        <h3>Achievements & Recognitions</h3>
        <ul>
          <li>🏅 Best Astrologer Award 2023</li>
          <li>📜 Certified Vedic Astrologer</li>
          <li>🌟 Featured in Astrology Magazine</li>
        </ul>
      </Card>

      {/* Contact Section */}
      <Card className="contact-section">
        <h3>Contact Me</h3>
        <p>Get in touch for consultations and astrology guidance.</p>
        <Button label="Chat Now" className="contact-button" icon="pi pi-comments" />
        <Button label="Call Now" className="contact-button" icon="pi pi-phone" />
      </Card>

      <Footer />
    </div>
  );
}
