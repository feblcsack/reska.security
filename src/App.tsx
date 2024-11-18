import ChatBot from "./chat-bot";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Directur from "./pages/Directur";
import Home from "./pages/Home";
import Kasus from "./pages/Kasus";
import { HeroParallaxDemo } from "./pages/Parallax";
import Pengaruh from "./pages/Pengaruh";
import { Slider } from "./pages/Slider";

function App() {
  return (
    <>
      <Navbar />
      <ChatBot />
      <Home />
      <Directur />
      {/* <About /> */}
      <Kasus />
      <Pengaruh />
      <Slider />
      <HeroParallaxDemo />
      {/* <Animated/> */}
      {/* <Data /> */}
      {/* <Konsultasi /> */}

      {/* <Dokumentasi /> */}
      {/* <ChatBot/> */}
      <Footer />
    </>
  );
}

export default App;
