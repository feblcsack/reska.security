import { useEffect, useRef, useState } from "react";
import Navbar from "../components/HomeNav";
import { useStateContext } from "../context/stateContext";

const Landing = () => {
  const { setOpen } = useStateContext();
  const [transition, setTransition] = useState("fade-in");
  const [showFullText, setShowFullText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null!);

  const toggleShowText = () => setShowFullText(!showFullText);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement.currentTime >= 60) {
        console.log("Video reached 60 seconds");
        videoElement.currentTime = 60;
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleClick = () => {
    setTransition("fade-out");

    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  const fullText = `Dengan pengalamannya selama 21 tahun PT Reska Multi Usaha atau
    disebut KAI SERVICES, merupakan salah satu anak perusahaan PT.
    Kereta Api Indonesia (persero) yang berdiri pada 2003, mempunyai
    tujuan melaksanakan dan menunjang kebijakan dan program PT
    Kereta Api Indonesia (Persero) selaku perusahaan induk khususnya
    usaha restoran kereta api serta usaha lainnya. Bidang usaha PT
    Reska Multi Usaha sendiri memiliki 3 core business yaitu : On
    Board Services Terdiri dari Sales On Train, On Train Cleaning
    dan passenger Amenities Integrated Facility Service Terdiri dari
    Security, Parking, Cleaning Service, juga outsourcing.
    Commercial Services Terdiri dari Restaurant, General Service,
    Cafe and Catering.`;
  
  const previewText = fullText.substring(0, 400);

  return (
    <section
      className={`fixed inset-0 overflow-hidden transition ${transition}`}
    >
      <Navbar />

      <div className="container">
        <div className="page-container absolute inset-0 transition-all duration-500">
          <div className="absolute -z-10 inset-0 bg-black/80 w-screen h-screen"></div>

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            className="absolute -z-20 inset-0 w-full h-full object-cover"
          >
            <source src="/bg/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="px-4 mx-auto max-w-screen-xl text-center py-40 md:py-24 md:pt-52">
            <h1 className="mb-4 text-3xl text-white font-extrabold tracking-tight font-poppins leading-none md:text-5xl lg:text-6xl">
            Ciptakan Keamanan, {" "}
              <span className="text-yellow">Wujudkan Kenyamanan!</span>
            </h1>
            <p className="mb-8 text-sm font-normal text-gray-300 lg:text-base sm:px-16 lg:px-48 md:scale-110 pt-2 md:pt-5">
              {showFullText ? fullText : `${previewText}...`}
            </p>
            <button
              onClick={toggleShowText}
              className="text-yellow hover:underline mb-8"
            >
              {showFullText ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
            </button>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <button
                onClick={handleClick}
                className="inline-flex justify-center items-center text-white bg-yellow/80 hover:bg-secondary/90 font-medium rounded-lg text-sm px-8 py-2 text-center"
              >
                Mulai
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
