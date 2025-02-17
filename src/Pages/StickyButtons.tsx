import { Button } from 'primereact/button';
import "../Pages/Style/StickyButton.css";

export default function StickyButtons() {
    return (
        <div className="sticky-buttons">
            <Button label="Chat Now" icon="pi pi-comments" className="p-button-success" onClick={() => alert('Chat Now clicked')} />
            <Button label="Call Now" icon="pi pi-phone" className="p-button-warning" onClick={() => alert('Call Now clicked')} />
        </div>
    );
}
