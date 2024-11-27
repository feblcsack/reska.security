import { Clean } from "../components/models/Clean";
import { Park } from "../components/models/Park";
import { Resto } from "../components/models/Resto";
import { Security } from "../components/models/Security";
import { Kereta } from "../components/models/Train";
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
      "Resto on Train adalah layanan makanan dan minuman yang disediakan oleh PT Reska Multi Usaha di dalam kereta api. Dengan konsep kuliner kereta, layanan ini menghadirkan berbagai pilihan makanan dan minuman berkualitas untuk menemani perjalanan penumpang.",
    informationLink:
      "https://reska.co.id/layanan/resto-on-train/",
    image: "/icon/resto-on-train.png",
    backgroundColor: "#5562AD",
    height: "225px",
    model: <Kereta />,
    caseImages: [
      "/train/train1.jpg",
      "/train/train2.jpg",
      "/train/train3.jpg",
    ],
    previewImage: "/resto-on-train/preview.jpg",
  },
  {
    title: "Resparking",
    description: "16%",
    information:
      "Resparking adalah layanan pengelolaan area parkir yang dikelola oleh PT Reska Multi Usaha di stasiun-stasiun kereta api. Layanan ini memastikan area parkir yang aman, tertata, dan mudah diakses oleh pengguna jasa transportasi kereta api.",
    informationLink:
      "https://reska.co.id/layanan/resparking/",
    image: "/icon/resparking.png",
    backgroundColor: "#E33B3B",
    height: "300px",
    model: <Park />,
    caseImages: [
      "/park/park1.jpeg",
      "/park/park2.jpeg",
      "/park/park3.jpeg",
    ],
    previewImage: "/resparking/preview.jpg",
  },
  {
    title: "Cafe & Catering",
    description: "18,8%",
    information:
      "Cafe & Catering adalah layanan penyedia makanan dan minuman untuk acara-acara khusus, termasuk layanan katering untuk kebutuhan perusahaan dan individu. PT Reska Multi Usaha menghadirkan sajian yang beragam dengan cita rasa khas.",
    informationLink:
      "https://reska.co.id/layanan/cafe-catering/",
    image: "/icon/cafe-catering.png",
    backgroundColor: "#0E9D75",
    height: "220px",
    model: <Resto />,
    caseImages: [
      "/cafe/cafe1.jpg",
      "/cafe/cafe2.jpeg",
      "/cafe/cafe3.jpg",
    ],
    previewImage: "/cafe-catering/preview.jpg",
  },
  {
    title: "Security",
    description: "21,4%",
    information:
      "Layanan keamanan yang dikelola oleh PT Reska Multi Usaha bertujuan untuk memastikan keamanan dan kenyamanan di lingkungan stasiun kereta api serta dalam perjalanan kereta api. Tim keamanan dilatih untuk menghadapi berbagai situasi darurat.",
    informationLink:
      "https://reska.co.id/layanan/security/",
    image: "/icon/security.png",
    backgroundColor: "#F36932",
    height: "270px",
    model: <Security />,
    caseImages: [
      "/security/security1.jpeg",
      "/security/security2.jpeg",
      "/security/security3.jpg",
    ],
    previewImage: "/security/preview.jpg",
  },
  {
    title: "Resclean",
    description: "41,1%",
    information:
      "Resclean adalah layanan kebersihan yang ditawarkan oleh PT Reska Multi Usaha. Layanan ini mencakup pembersihan kereta api, stasiun, dan area sekitarnya untuk menciptakan lingkungan yang bersih dan nyaman bagi para pengguna jasa.",
    informationLink:
      "https://reska.co.id/layanan/resclean/",
    image: "/icon/resclean.png",
    backgroundColor: "#16AE79",
    height: "220px",
    model: <Clean />,
    caseImages: [
      "/clean/clean1.jpg",
      "/clean/clean2.jpeg",
      "/clean/clean3.png",
    ],
    previewImage: "/resclean/preview.jpg",
  },
];
