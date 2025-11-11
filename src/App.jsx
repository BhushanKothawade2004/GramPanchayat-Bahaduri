import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Awards from './components/Awards';
import News from './components/News';
import Achievements from './components/Achievements';
import NoticeBoard from './components/NoticeBoard';
import PopulationStats from './components/PopulationStats';
import ComplaintModal from './components/ComplaintModal';
import { VillageStatisticsComponents } from './components/VillageComponents';
import Footer from './components/Footer';
import FloatingComplaintButton from './components/FloatingComplaintButton';

function App() {
  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation onOpenComplaint={() => setIsComplaintModalOpen(true)} />
      <Hero />
      <About />
      <Leadership />
      <Awards />
      <News />
      <Achievements />
      <NoticeBoard />
      {/* <PopulationStats /> */}
      <VillageStatisticsComponents language="mr" />
      <Footer />
      <FloatingComplaintButton onOpenComplaint={() => setIsComplaintModalOpen(true)} />
      <ComplaintModal 
        isOpen={isComplaintModalOpen} 
        onClose={() => setIsComplaintModalOpen(false)} 
      />
    </div>
  );
}

export default App;
