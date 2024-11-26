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
        Fitur Unggulan
      </h2>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Pengalaman dan Profesionalisme</Accordion.Title>
          <Accordion.Content>
          Dengan lebih dari 21 tahun pengalaman, Reska Multi Usaha terus berinovasi untuk memberikan pelayanan terbaik. Setiap aspek layanan dijalankan dengan dedikasi tinggi, didukung oleh tenaga kerja yang profesional dan berkompeten.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Layanan Terintegrasi</Accordion.Title>
          <Accordion.Content>
          Semua layanan—dari kebersihan hingga katering—dirancang untuk saling melengkapi. Pendekatan ini memastikan pelanggan mendapatkan solusi lengkap yang efisien dan efektif, baik untuk individu maupun perusahaan.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Pelatihan Karyawan</Accordion.Title>
          <Accordion.Content>
          Semua karyawan, termasuk tenaga keamanan dan tim kebersihan, secara rutin mengikuti pelatihan untuk meningkatkan kompetensi mereka. Program pelatihan ini meliputi standar operasional, hospitality, dan penguasaan teknologi terbaru.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Testimoni Pelanggan</Accordion.Title>
          <Accordion.Content>
          "Layanan Reska sangat profesional dan memuaskan. Kebersihan stasiun terjaga, dan pengalaman kuliner di kereta luar biasa!" – Rina, pelanggan setia.
          "Tim keamanan Reska sangat membantu dan selalu siap sedia." – Dani, mitra bisnis.
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
