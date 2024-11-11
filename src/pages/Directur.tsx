import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function Directur() {
  const directors = [
    {
      name: "RIRIN WIDI ASTUTIK",
      role: "Plt. Direktur Utama",
      image: "/public/direksi/RU.png",
    },
    {
      name: "DENY EKO ANDRIANTO",
      role: "Plt. Direktur Keuangan dan Administrasi",
      image: "/public/direksi/rk_04.png",
    },
    {
      name: "BAMBANG SULIASTOWO",
      role: "Direktur Operasi",
      image: "/public/direksi/ro_03.png",
    },
    {
      name: "LIES PERMANA LESTARI",
      role: "Direktur Consumer Business",
      image: "/public/direksi/RC3.png",
    },
  ];

  const komisaris = [
    {
      name: "LATIEF NURBANA",
      role: "Komisaris",
      image: "/public/direksi/Bpk-Latief.png",
    },
    {
        name: "REVIANDI",
        role: "Komisaris Independen",
        image: "/public/direksi/komisaris_independen.png",
      },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
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
                <div className="aspect-[3/4] relative group">
                  <img
                    alt={director.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    height={400}
                    src={director.image}
                    style={{
                      aspectRatio: "3/4",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
                <div className="aspect-[3/4] relative group">
                  <img
                    alt={komi.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    height={400}
                    src={komi.image}
                    style={{
                      aspectRatio: "3/4",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
