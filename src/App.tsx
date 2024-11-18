import ChatBot from "./chat-bot";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Animated } from "./layout/Animated";

import Directur from "./pages/Directur";

import Home from "./pages/Home";
import Kasus from "./pages/Kasus";
import Konsultasi from "./pages/Konsultasi";
import Pengaruh from "./pages/Pengaruh";

function App() {
  return (
    <>
      <Navbar />
      <ChatBot/>
      <Home />
    <Directur/>
      {/* <About /> */}
      <Kasus />
      <Pengaruh />
      <Animated/>
      {/* <Data /> */}
      <Konsultasi />
      {/* <Dokumentasi /> */}
      {/* <ChatBot/> */}
      <Footer />
    </>
  );
}

export default App;
