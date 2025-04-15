// src/pages/Home.tsx
import Header from '../components/organism/Header';
import Footer2 from '../components/organism/Footer2';
import Footer from '../components/organism/Footer';


function Home() {
  return (
    <div>
      <Header />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Tengo sueñoooo ....zzzz.....zzz......zz..z.....</h1>
      </div>

      {/* Aquí insertamos Footer2 */}
      <Footer2 />

      {/* Y luego tu footer “principal” */}
      <Footer />
    </div>
  );
}

export default Home;
