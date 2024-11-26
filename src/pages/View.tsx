"use client";
import { InView } from "../components/ui/in-view";
import { motion } from "framer-motion";

export function View() {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="flex h-[1200px] items-end justify-center pb-12">
        <InView
          viewOptions={{
            once: false, // Menetapkan agar animasi berlaku setiap kali gambar masuk/keluar tampilan
            margin: "0px 0px -100px 0px", // Menentukan area margin untuk gambar terlihat saat hampir di-scroll
          }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                opacity: { duration: 1 },
                scale: { duration: 0.6 },
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {[
              "/view/1.jpeg",
              "/view/2.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
              "/view/3.jpeg",
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <motion.img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className="size-full rounded-lg object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
