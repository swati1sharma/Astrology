import '../Pages/Style/Horoscope.css'
export default function Horoscope() {
    const horoscopes = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];
  
    return (
        <div>
        <h3 className="horoscope-heading">Free Daily / Weekly / Monthly Horoscope</h3>
        <div className="horoscope-container">
          {horoscopes.map((sign, index) => (
            <div key={index} className="horoscope-item">
             <img src="https://indianexpress.com/article/horoscope/january-30-2025-daily-horoscope-predictions-zodiac-signs-9782556/" alt={sign} className="horoscope-image" />

              <p className="horoscope-name">{sign}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }