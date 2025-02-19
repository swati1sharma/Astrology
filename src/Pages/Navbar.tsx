import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../Pages/Style/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Image } from 'primereact/image';


const Navbar = () => {
    const navigate = useNavigate();

    const items = [
        { label: 'Home', icon: 'pi pi-home', command: () => navigate('/') },
        { label: 'Services', icon: 'pi pi-star', command: () => navigate('/service') },
        { label: 'Products', icon: 'pi pi-shopping-cart', command: () => navigate('/products') },
        { label: 'Special Offers', icon: 'pi pi-gift', command: () => navigate('/offer') },
        { label: 'Contact', icon: 'pi pi-phone', command: () => navigate('/contact') },
        { label: 'About Us', icon: 'pi pi-star', command: () => navigate('/about') }
    ];

    const endContent = (
        <div className="flex gap-2">
            <Button label="Book a Consultation" icon="pi pi-calendar" className="p-button-outlined p-button-primary" onClick={() => navigate('/book-consultation')} />
        </div>
    );

    return (
        <div className="card">
            <div className="top-navbar">
        <div className="number-content">
          <li className="contact-item">
            <i className="pi pi-phone"></i> +9946638
          </li>
          <li className="contact-item">
            <i className="pi pi-envelope"></i> example@gmail.com
          </li>
        </div>
      </div>
            <Menubar model={items} end={endContent} className="custom-menubar" />
          
            
            <div className="scrolable_navbar">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        <Image src="/path/to/logo.png" alt="Logo" className="logo" />
        <span className="scrolable_navbar_sectionOne">Popular Reports</span>
        <span className="new-badge">NEW</span>
        <span>Get personalised yearly Health Horoscope 2025</span>
        <span>Get personalised yearly Love Horoscope 2025</span>
        <span>Get personalised yearly Financial Horoscope 2025</span>
      </marquee>
    </div>

        </div>
    );
};

export default Navbar;
