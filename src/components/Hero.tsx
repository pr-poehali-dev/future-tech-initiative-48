import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Пейзаж"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center gap-8">
        <div>
          <p className="text-sm md:text-base uppercase tracking-widest opacity-80 mb-3">
            Добро пожаловать
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            ИНТЕЛЛЕКТУАЛЬНЫЙ МИР
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto">
            Пространство знаний для учеников, коллег и родителей
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <img
            src="https://cdn.poehali.dev/projects/0f1c8d80-ef5c-41bb-8e18-f9770cacba54/bucket/ba9885d1-f19a-4098-b7c2-db3fc6ed5d61.jpeg"
            alt="Тоетов Сергей Эжерович"
            className="w-24 h-24 rounded-full object-cover border-2 border-white/60"
          />
          <div className="text-left">
            <p className="text-xl md:text-2xl font-semibold">Тоетов Сергей Эжерович</p>
            <p className="text-sm md:text-base opacity-75 mt-1">Студент-практикант · Будущий учитель</p>
          </div>
        </div>
      </div>
    </div>
  );
}