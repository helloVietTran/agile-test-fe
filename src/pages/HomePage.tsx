import Header from '@/components/Header/Header';
import DataWarehouseIntro from '@/components/DataWarehouseIntro/DataWarehouseIntro';
import FeaturesSection from '@/components/FeaturesSection/FeaturesSection';
import SliderSection from '@/components/Slider/SliderSection';
import Footer from '@/components/Footer/Footer';
import Separator from '@/components/Separator/Separator';

const HomePage = () => {
  return (
    <>
      <Header />
      <DataWarehouseIntro />
      <FeaturesSection />
      <SliderSection />
      <Separator marginTop={70} marginBottom={0} />
      <Footer />
    </>
  );
};

export default HomePage;
