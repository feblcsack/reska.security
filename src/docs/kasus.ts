export interface Kasus {
  title: string;
  description: string;
  image: string;
  button: {
    label: string;
    image: string;
  };
}

export const kasusList: Kasus[] = [
  {
    title: "Resto on Train",
    description: `Menyediakan berbagai pilihan makanan dan minuman di atas kereta, seperti "Nasi Goreng Parahyangan" yang legendaris. PT Reska Multi Usaha berfokus pada peningkatan kualitas layanan makan di kereta, dengan tujuan memberikan kenyamanan dan kepuasan bagi penumpang selama perjalanan.`,
    image: "/train/train1.jpg",
    button: {
      label: "Resto on Train",
      image: "/icon/resto-on-train.png",
    },

  },
  {
    title: "Resparking",
    description: `Layanan parkir yang dikelola oleh PT Reska Multi Usaha di berbagai stasiun, memungkinkan penumpang untuk menikmati kenyamanan parkir yang terintegrasi dengan sistem perkeretaapian. Reska bertujuan untuk menyediakan fasilitas yang aman dan mudah diakses bagi para pengendara.`,
    image: "/park/park1.jpeg",
    button: {
      label: "Resparking",
      image: "/icon/resparking.png",
    },
  },
  {
    title: "Cafe & Catering",
    description: `Menyediakan layanan kafe dan katering di stasiun dan kereta, termasuk berbagai pilihan makanan dan minuman yang dapat dinikmati penumpang selama perjalanan. Reska Multi Usaha mengelola berbagai kafe yang menawarkan kenyamanan serta pelayanan terbaik untuk penumpang.`,
    image: "/cafe/cafe1.jpg",
    button: {
      label: "Cafe & Catering",
      image: "/icon/cafe-catering.png",
    },
  },
  {
    title: "Security",
    description: `Layanan keamanan yang mencakup pengelolaan keamanan di stasiun dan kereta, memastikan kenyamanan dan keselamatan penumpang selama perjalanan. Dengan tim yang terlatih dan profesional, Reska memastikan lingkungan yang aman dan terkendali bagi pengguna layanan perkeretaapian.`,
    image: "/security/security1.jpeg",
    button: {
      label: "Security",
      image: "/icon/security.png",
    },
  },
  {
    title: "Resclean",
    description: `Menyediakan layanan kebersihan di stasiun dan kereta untuk memastikan bahwa fasilitas yang digunakan penumpang tetap bersih dan nyaman. Reska berkomitmen untuk memberikan pengalaman perjalanan yang nyaman dan menyegarkan dengan menjaga kebersihan di setiap titik layanan.`,
    image: "/clean/clean1.jpg",
    button: {
      label: "Resclean",
      image: "/icon/resclean.png",
    },
  },
  
];
