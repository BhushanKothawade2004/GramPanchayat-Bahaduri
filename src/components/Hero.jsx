import gavImage from '../images/gav.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gavImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg">
            वडाळीभोई ग्रामपंचायत
          </h1>
          <div className="space-y-4 max-w-4xl mx-auto">
            <div>
              <p className="text-xl md:text-2xl mb-2 font-semibold drop-shadow-md">आपला अभिमान</p>
              <p className="text-lg md:text-xl drop-shadow-md">
                एक समृद्ध शांत गाव – जिथे परंपरा, संस्कृती आणि शेतीचा अभिमान जपला जातो.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl mb-2 font-semibold drop-shadow-md">विकासाच्या दिशेने</p>
              <p className="text-lg md:text-xl drop-shadow-md">
                आत्मनिर्भर आणि प्रगत गावाची निर्मिती.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl mb-2 font-semibold drop-shadow-md">वारसा आणि भक्ती</p>
              <p className="text-lg md:text-xl drop-shadow-md">
                मंदिरे, संस्कृती आणि अखंड श्रद्धेचे स्थान.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
