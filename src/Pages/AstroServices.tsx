import { Card } from "primereact/card";
// import { Grid, Row, Col } from "primereact/grid";
import { classNames } from "primereact/utils";

const astroServices = [
  { label: "Kundli (Birth Chart)", icon: "pi pi-book" },
  { label: "Horoscope Matching", icon: "pi pi-heart" },
  { label: "AstroSage Matrimony", icon: "pi pi-calendar" },
  { label: "Ask a Question", icon: "pi pi-question-circle" },
  { label: "Dhruv Astro Software", icon: "pi pi-book" },
  { label: "Career Counselling", icon: "pi pi-briefcase" },
  { label: "Brihat Horoscope", icon: "pi pi-book" },
  { label: "Exam Results", icon: "pi pi-list" },
  { label: "Talk to Astrologer", icon: "pi pi-phone", highlight: true },
  { label: "Paid Services", icon: "pi pi-dollar" },
  { label: "Horoscope 2025", icon: "pi pi-sun" },
  { label: "Lal Kitab Horoscope", icon: "pi pi-book" },
  { label: "Sade Sati Life Report", icon: "pi pi-globe" },
  { label: "Year Analysis (Varshphal)", icon: "pi pi-calendar" },
  { label: "Baby Name Suggestion", icon: "pi pi-user" },
  { label: "Gochar Phal (Transit Report)", icon: "pi pi-chart-line" },
  { label: "Life Report", icon: "pi pi-file" },
  { label: "Online Astrology Software", icon: "pi pi-desktop" },
  { label: "Hindi Kundli", icon: "pi pi-align-justify" },
  { label: "Numerology Calculator", icon: "pi pi-calculator" },
  { label: "Celebrity Horoscope", icon: "pi pi-star" },
  { label: "Learn Astrology", icon: "pi pi-lightbulb" },
  { label: "Love Horoscope", icon: "pi pi-heart" },
  { label: "Gemstones Report", icon: "pi pi-gem" },
  { label: "Mangal Dosha", icon: "pi pi-exclamation-triangle" },
  { label: "Dasha Phal Analysis", icon: "pi pi-sun" },
  { label: "Ascendant Calculator", icon: "pi pi-calculator" },
  { label: "Today's Rahukaal", icon: "pi pi-clock" },
  { label: "AstroSage TV", icon: "pi pi-video" },
  { label: "Occult Directory", icon: "pi pi-folder" },
  { label: "Chinese Astrology", icon: "pi pi-globe" },
  { label: "Kaalsarp Dosha", icon: "pi pi-exclamation-triangle" },
];

export default function AstroServices() {
  return (
    <div className="p-4">
      <Grid className="grid">
        {astroServices.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="p-2">
            <Card className={classNames("p-3 text-center", { "bg-primary text-white": service.highlight })}>
              <div className="flex flex-column align-items-center">
                <i className={classNames(service.icon, "text-3xl mb-2")}></i>
                <span className="font-semibold">{service.label}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Grid>
    </div>
  );
}
