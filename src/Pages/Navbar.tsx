import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../Pages/Style/Navbar.css';
import { useNavigate } from 'react-router-dom';

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
            <Menubar model={items} end={endContent} className="custom-menubar" />
        </div>
    );
};

export default Navbar;
