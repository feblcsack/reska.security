"use client";
import { Accordion } from "flowbite-react";
import { useRef } from "react";
import useScrollAnimation from "../func/scrollAnimation";

export function Dampak() {
  const accordionRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(accordionRef, (element, position) => {
    const positionTop = position.top - window.innerHeight;

    if (positionTop < 0) {
      const newPosition = Math.abs(positionTop);

      if (window.innerWidth <= 768) {
        element.style.transform = `translateX(${0}px)`;
      } else {
        if (newPosition / 5 < 150) {
          element.style.transform = `translateX(${newPosition / 4}px)`;
        }
      }
    }
  });

  return (
    <div
      ref={accordionRef}
      id="dampak"
      className="block md:relative right-14 md:right-32 w-full rounded-lg border px-5 py-5 shadow-lg md:w-[400px] transition ease-out duration-150"
      style={{ transform: "translateX(-500px)" }}
    >
      <h2 className="mb-5 text-center text-2xl font-semibold">
      Layanan Utama
      </h2>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Kebersihan (Resclean)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
            Layanan kebersihan ini mencakup pembersihan gedung, area publik, dan fasilitas transportasi seperti kereta api dan stasiun. Dengan standar operasional yang ketat, Resclean memastikan setiap sudut bersih dan higienis. Juga tersedia layanan pembersihan khusus untuk kebutuhan tertentu, seperti event atau lokasi dengan tingkat lalu lintas tinggi.
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Keamanan (Security)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
            Layanan ini menyediakan tenaga keamanan yang terlatih melalui program seperti pelatihan Gada Pratama. Tim keamanan bertanggung jawab atas pengawasan, patroli, dan penerapan sistem keamanan modern di berbagai fasilitas. Fokus utama adalah memberikan rasa aman dengan pendekatan 3B: Brain, Brave, Behavior.
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Restoran (Resto On Train)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
            Menyajikan pengalaman kuliner di perjalanan kereta dengan menu yang bervariasi dan berkualitas tinggi. Restoran dan kafe yang dikelola menawarkan konsep unik, seperti kafe bertema kereta, dengan hidangan yang memadukan cita rasa lokal dan internasional.
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Cafe & Catering</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
            Menyediakan layanan catering untuk acara-acara khusus seperti pernikahan, seminar, atau gathering perusahaan. Reska menawarkan berbagai pilihan menu mulai dari prasmanan hingga bento, disesuaikan dengan kebutuhan pelanggan, dengan fokus pada kualitas dan presentasi makanan.
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        
      </Accordion>
    </div>
  );
}

export function Solusi() {
  const accordionRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(accordionRef, (element, position) => {
    const positionTop = position.top - window.innerHeight;

    if (positionTop < 0) {
      const newPosition = Math.abs(positionTop);

      if (window.innerWidth <= 768) {
        element.style.transform = `translateX(-${0}px)`;
      } else {
        if (newPosition / 5 < 150) {
          element.style.transform = `translateX(-${newPosition / 4}px)`;
        }
      }
    }
  });

  return (
    <div
      ref={accordionRef}
      id="solusi"
      className="block md:relative -right-14 md:-right-32 w-full rounded-lg border px-5 py-5 shadow-lg md:w-[400px] transition ease-out duration-150"
    >
      <h2 className="mb-5 text-center text-2xl font-semibold">
        Solusi Kenakalan Remaja
      </h2>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Perilaku Buruk (Tawuran)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
              <li className="mb-2 text-gray-500">Meningkatkan kesadaran diri</li>
              <li className="mb-2 text-gray-500">Melakukan pendekatan restoratif</li>
              <li className="mb-2 text-gray-500">Melibatkan keluarga dalam penyelesaian</li>
              <li className="mb-2 text-gray-500">Menerapkan hukum yang sesuai</li>
              <li className="mb-2 text-gray-500">Meningkatkan pengawasan di setiap daerah</li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Perilaku Buruk (Narkoba)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
              <li className="mb-2 text-gray-500">Mempelajari dampak dari penggunaan narkoba</li>
              <li className="mb-2 text-gray-500">
                Membuat prinsip yang kuat pada diri sendiri supaya tidak sedikitpun menyentuh narkoba
              </li>
              <li className="mb-2 text-gray-500">
                Melakukan konsisten olahraga, agar semakin mengerti pentingnya kesehatan
              </li>
              <li className="mb-2 text-gray-500">Lebih meyakinkan diri lagi dengan larangan-larangan kitab suci</li>
              <li className="mb-2 text-gray-500">
                Menumbuhkan rasa untuk menolong sesama melalui konseling atau bantuan grup
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Perilaku Buruk (Merokok)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
              <li className="mb-2 text-gray-500">Menggunakan media sosial untuk edukasi</li>
              <li className="mb-2 text-gray-500">
                Melakukan pendampingan dengan teman yang lebih tahu bahaya merokok
              </li>
              <li className="mb-2 text-gray-500">Menggunakan berbagai metode untuk berhenti merokok</li>
              <li className="mb-2 text-gray-500">Meningkatkan pengawasan yang ketat untuk pencegahan lebih dini</li>
              <li className="mb-2 text-gray-500">Mengajak masyarakat untuk peduli dan tahu dampak negatifnya</li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Perilaku Buruk (Seksual)</Accordion.Title>
          <Accordion.Content>
            <ul className="mb-2 ml-2 list-decimal text-gray-500">
              <li className="mb-2 text-gray-500">
                Melakukan edukasi lebih mendalam terhadap dampak dan akibatnya
              </li>
              <li className="mb-2 text-gray-500">
                Meningkatkan rasa tanggung jawab dan kesadaran sosial di masyarakat
              </li>
              <li className="mb-2 text-gray-500">
                Menyediakan sarana konsultasi untuk remaja yang mungkin terdampak
              </li>
              <li className="mb-2 text-gray-500">Menjadi role model untuk remaja dalam menjalani hidup dengan sehat</li>
              <li className="mb-2 text-gray-500">Melakukan kampanye kesadaran untuk pengaruh media sosial</li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
