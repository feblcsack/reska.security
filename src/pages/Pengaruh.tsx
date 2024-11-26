import { Dampak, Solusi } from "../components/Accordion";
import Plane from "../components/Plane";

const Pengaruh = () => {
  return (
    <section id="pengaruh" className="relative overflow-x-hidden pt-36">
      <Plane />;
      <div className="container">
  <h1
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    className="text-center text-3xl font-bold md:text-4xl">
    Mewujudkan <span className="text-yellow">Layanan Terbaik</span> untuk Masa Depan
  </h1>
  <p
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-delay="100"
    className="mx-auto mt-5 text-center text-sm text-secondary-200 md:max-w-2xl md:text-base">
    Dengan pengalaman lebih dari 21 tahun, Reska Multi Usaha hadir sebagai mitra andal yang menyediakan layanan 
    kebersihan, keamanan, dan kuliner berkelas. Kami percaya pada inovasi, profesionalisme, dan semangat kerja 
    untuk menciptakan dampak positif di setiap langkah perjalanan Anda.
  </p>

        <div className="mt-8 flex flex-wrap justify-evenly gap-10 overflow-x-hidden pb-5">
          <Dampak />
          <Solusi />
        </div>
      </div>
    </section>
  );
};

export default Pengaruh;
