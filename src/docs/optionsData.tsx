import Botol from "../components/models/Botol";
import Celurit from "../components/models/Celurit";
import Ganja from "../components/models/Ganja";
import { Model } from "../components/models/Rokok";
import { Sex } from "../components/models/Sex";
import { Sign } from "../components/models/Sign";
// import ThreeDObject from "./ThreeDObject";

interface Option {
  title: string;
  description: string;
  information: string;
  informationLink: string;
  image: string;
  backgroundColor: string;
  height: string;
  model: JSX.Element; 
  caseImages: string[];
  previewImage?: string; 
}

export const options: Option[] = [
  {
    title: "Resto on Train",
    description: "16%",
    information:
      "KAI Services memiliki salah satu bidang usaha dengan Core Business On Board Services yang bernama Restaurant On Train, dengan Branding Kuliner Kereta yang bertugas Mengelola dan Melayani penjualan Makan dan Minum di Setiap Perjalanan Kereta Api.​",
    informationLink: "https://jakarta.bps.go.id/id/statistics-table/2/MTE5NCMy/banyaknya-kelurahan-yang-mengalami-perkelahian-massal-disebabkan-keramaian--podes-.html",
    image: "/icon/celurit.png",
    backgroundColor: "#5562AD",
    height: "225px",
    model: (
      <>
        <Celurit scale={1.2} position={[1, 0, 0]} rotation={[0, Math.PI, Math.PI / 6]} isHovered />
        <Celurit scale={1.2} position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 6]} isHovered />
      </>
    ),
    caseImages: [
      "/tawuran/1.jpeg",
      "/tawuran/2.jpeg",
      "/tawuran/3.jpeg",
      "/tawuran/1.jpeg",
      "/kasus.png",
    ],
    previewImage: "/tawuran/1.jpeg", 
  },
  {
    title: "Resparking",
    description: "16%",
    information: "Menurut data dari Badan Narkotika Nasional (BNN), pada tahun 2023, diperkirakan sekitar 3,6 juta orang di Indonesia terlibat dalam penyalahgunaan narkoba. Kelompok usia yang paling rentan adalah 15-35 tahun, menunjukkan bahwa anak muda sangat terpengaruh oleh masalah ini.",
    informationLink: "https://www.cnnindonesia.com/search/?query=narkoba",
    image: "/narkoba/2.jpeg",
    backgroundColor: "#E33B3B",
    height: "300px",
    model: <Ganja scale={15} />,
    caseImages: [
      "/narkoba/1.png",
      "/narkoba/2.jpeg",
      "/narkoba/3.jpg",
      "/narkoba/4.jpg",
      "/narkoba/5.jpg",
    ],
    previewImage: "/narkoba/2.jpeg",
  },
  {
    title: "Cafe & Catering",
    description: "18,8%",
    information: "Data terkait merokok di Indonesia menunjukkan bahwa Indonesia adalah salah satu negara dengan prevalensi perokok tertinggi di dunia. Pada 2022, diperkirakan lebih dari 61,4 juta orang di Indonesia adalah perokok, dengan lebih dari 70% di antaranya adalah laki-laki dewasa. Prevalensi merokok pada remaja juga sangat tinggi, dengan sekitar 20% remaja berusia 13-15 tahun tercatat sebagai perokok aktif.",
    informationLink: "https://www.cnnindonesia.com/search/?query=merokok",
    image: "/path/to/remaja-image.jpg",
    backgroundColor: "#0E9D75",
    height: "320px",
    model: <Model />,
    caseImages: [
      "/merokok/1.jpg",
      "/merokok/2.jpg",
      "/merokok/3.jpg",
      "/merokok/4.jpg",
      "/merokok/5.jpg",
    ],
    previewImage: "/merokok/3.jpg",
  },
  {
    title: "Security",
    description: "21,4%",
    information: " Berdasarkan laporan Badan Kependudukan dan Keluarga Berencana Nasional (BKKBN), angka kehamilan di kalangan remaja di Indonesia cukup signifikan. Menurut Survei Demografi dan Kesehatan Indonesia (SDKI) tahun 2017, sekitar 7% perempuan usia 15-19 tahun di Indonesia telah mengalami kehamilan. Hal ini seringkali dikaitkan dengan minimnya pengetahuan tentang kesehatan reproduksi dan perilaku seksual yang tidak aman.",
    informationLink: "https://www.cnnindonesia.com/search/?query=seksual",
    image: "/path/to/dewasa-image.jpg",
    backgroundColor: "#F36932",
    height: "270px",
    model: <Sex />,
    caseImages: [
      "/seksual/1.jpg",
      "/seksual/2.jpg",
      "/seksual/3.jpg",
      "/seksual/4.jpeg",
      "/seksual/5.jpg",
    ],
    previewImage: "/seksual/3.jpg",
  },
  {
    title: "Resclean",
    description: "41,1%",
    information: "Data mengenai bullying di Indonesia menunjukkan bahwa praktik ini masih menjadi masalah serius, terutama di kalangan remaja dan pelajar. Menurut survei dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, serta beberapa lembaga swadaya masyarakat, prevalensi bullying di lingkungan sekolah cukup tinggi.",
    informationLink: "https://www.cnnindonesia.com/search/?query=bullying",
    image: "/path/to/lansia-image.jpg",
    backgroundColor: "#16AE79",
    height: "220px",
    model: <Sign/>,
    caseImages: [
      "/bullying/1.jpg",
      "/bullying/2.jpg",
      "/bullying/3.jpg",
      "/bullying/4.jpg",
      "/bullying/5.jpg",
    ],
    previewImage: "/bullying/4.jpg",
  },
]