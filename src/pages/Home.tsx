// src/pages/Home.tsx
import Header from '../components/organism/Header';
import Footer2 from '../components/organism/Footer2';
import Footer from '../components/organism/Footer';
import HeroImage from '../components/molecules/HeroImage';
import AboutSkillNet from '../components/molecules/AboutSkillNet';
import Objective from '../components/molecules/Objective';
import FeaturesSkillNet from '../components/molecules/FeaturesSkillNet';

function Home() {
  return (
    <div>
      <Header />

      <HeroImage />
      <AboutSkillNet />
      <Objective />
      <FeaturesSkillNet />

      <Footer2 />
      <Footer />
    </div>
  );
}

export default Home;