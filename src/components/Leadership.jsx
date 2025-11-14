import kakaImage from '../images/kaka.jpeg';
import image4 from '../images/image4.jpeg';
import dummyImage from '../images/dummy.jpg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
import image9 from '../images/image9.jpeg';

const Leadership = () => {
  const teamMembers = [
    {
      image: image4,
      name: 'आनंदा मुरलीधर शिरसाठ',
      role: 'उपसरपंच',
      village: 'बहादूरी'
    },
    {
      image: dummyImage,
      name: 'संपूर्ण नाव',
      role: 'ग्रामपंचायत अधिकारी',
      village: 'बहादूरी'
    },
    {
      image: image5,
      name: 'नवनाथ निवृत्ती उगले',
      role: 'सदस्य',
      village: 'बहादूरी'
    },
    {
      image: image6,
      name: 'शैला योगेश गारे',
      role: 'सदस्य',
      village: 'बहादूरी'
    },
    {
      image: image7,
      name: 'समाधान काशिनाथ शिरसाठ',
      role: 'सदस्य',
      village: 'बहादूरी'
    },
    {
      image: image8,
      name: 'योगेश गरिबराव गांगुर्डे',
      role: 'सदस्य',
      village: 'बहादूरी'
    },
    {
      image: image9,
      name: 'अंजना रमेश आढार',
      role: 'सदस्य',
      village: 'बहादूरी'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading with horizontal lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-teal-600"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mx-6 tracking-wide">
              नेतृत्व
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-teal-400 to-teal-600"></div>
          </div>

          {/* Descriptive Paragraph */}
          <p className="text-lg md:text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            आमचे आदरणीय सरपंच नेतृत्व समर्पण, प्रामाणिकपणा आणि विकासाच्या दृष्टिकोनाने करतात.
          </p>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column - Sarpanch Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-2 bg-gradient-to-br from-teal-50 to-blue-50">
                <div className="bg-white rounded-lg p-4">
                  <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={kakaImage} 
                      
                      alt="सरपंच" 
                      className="w-full h-[400px] object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                      मंगलाताई केदु शिरसाठ
                    </h3>
                    <div className="inline-block px-4 py-1 bg-teal-100 rounded-full mb-2">
                      <p className="text-lg font-semibold text-teal-800">सरपंच</p>
                    </div>
                    <p className="text-base text-gray-600 font-medium">बहादूरी</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Leadership Description Block */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl shadow-xl p-8 md:p-10 flex items-center border border-teal-800">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-12 bg-white rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">आमचे नेतृत्व</h3>
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed text-left">
                  गावाच्या सर्वांगीण विकासासाठी, शेतकऱ्यांच्या प्रगतीसाठी, महिला बालकांच्या कल्याणासाठी तसेच सामाजिक ऐक्य राखण्यासाठी आमचे सरपंच नेहमीच पुढाकार घेतात. ग्रामस्थांच्या सक्रिय सहभागाने, पंचायत प्रगती आणि एकतेसाठी काम करते.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-16 h-0.5 bg-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Section - Three Cards */}
          <div className="mt-24 md:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.role} 
                      className="w-full h-[350px] object-cover object-center hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-teal-100 rounded-full mb-1">
                      <p className="text-base font-semibold text-teal-800">{member.role}</p>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{member.village}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
