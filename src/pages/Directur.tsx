import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { useState } from "react";

function Placeholder() {
  return (
    <div className="aspect-[3/4] bg-gray-300 animate-pulse w-full h-full rounded-[4px]"></div>
  );
}

function ImageWithLoader({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="aspect-[3/4] relative group">
      {!isLoaded && <Placeholder />}
      <img
        alt={alt}
        src={src}
        className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function Directur() {
  const directors = [
    {
      name: "RIRIN WIDI ASTUTIK",
      role: "Plt. Direktur Utama",
      image: "direksi/RU.png",
    },
    {
      name: "DENY EKO ANDRIANTO",
      role: "Plt. Direktur Keuangan dan Administrasi",
      image: "direksi/rk_04.png",
    },
    {
      name: "BAMBANG SULIASTOWO",
      role: "Direktur Operasi",
      image: "direksi/ro_03.png",
    },
    {
      name: "LIES PERMANA LESTARI",
      role: "Direktur Consumer Business",
      image: "direksi/RC3.png",
    },
  ];

  const komisaris = [
    {
      name: "LATIEF NURBANA",
      role: "Komisaris",
      image: "direksi/Bpk-Latief.png",
    },
    {
      name: "REVIANDI",
      role: "Komisaris Independen",
      image: "direksi/komisaris_independen.png",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        {/* Direksi */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Direksi
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Para Direksi PT. Reska Multi Usaha
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {directors.map((director) => (
            <Card
              key={director.name}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardContent className="p-0">
                <ImageWithLoader src={director.image} alt={director.name} />
                <div className="p-4">
                  <h3 className="text-lg font-bold tracking-tight">
                    {director.name}
                  </h3>
                  <Badge variant="secondary" className="mt-2 bg-neutral-100">
                    {director.role}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dewan Komisaris */}
        <div className="flex flex-col mt-4 items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dewan Komisaris
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Para Dewan Komisaris PT. Reska Multi Usaha
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {komisaris.map((komi) => (
            <Card
              key={komi.name}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardContent className="p-0">
                <ImageWithLoader src={komi.image} alt={komi.name} />
                <div className="p-4">
                  <h3 className="text-lg font-bold tracking-tight">
                    {komi.name}
                  </h3>
                  <Badge variant="secondary" className="mt-2 bg-neutral-100">
                    {komi.role}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
