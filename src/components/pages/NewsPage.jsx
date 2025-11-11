import PageHero from '../PageHero';
import News from '../News';
import mandirImage from '../../images/gav.jpeg';

const NewsPage = () => {
  return (
    <div>
      <PageHero 
        title="न्युज/अपडेट्स" 
        subtitle="माहिती"
        image={mandirImage}
      />
      <News />
    </div>
  );
};

export default NewsPage;

