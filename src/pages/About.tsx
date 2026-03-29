import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const info = [
  { label: "Дата рождения", value: "25.06.2007" },
  { label: "Место учёбы", value: "БПОУ РА «Г-АПК им. В. А. Сластенина»" },
  { label: "Отделение", value: "Школьно-алтайское" },
  { label: "Специальность", value: "44.02.02 Преподавание в начальных классах" },
  { label: "Квалификация", value: "Учитель начальных классов" },
  { label: "Срок обучения", value: "01.09.2022 — 30.06.2026" },
  { label: "Форма обучения", value: "Очная" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header className="!text-neutral-900 [&_a]:!text-neutral-900 [&_div]:!text-neutral-900" />

      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <img
              src="https://cdn.poehali.dev/projects/0f1c8d80-ef5c-41bb-8e18-f9770cacba54/files/3bf746da-3089-40f4-a4ef-a132a21f5027.jpg"
              alt="Тоетов Сергей Эжерович"
              className="w-64 h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="text-center">
              <p className="font-semibold text-lg text-neutral-900">Тоетов Сергей Эжерович</p>
              <p className="text-sm text-neutral-500 mt-1">Студент-практикант · Будущий учитель</p>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Обо мне</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-10">
              Моя образовательная<br />траектория
            </h1>

            <div className="flex flex-col divide-y divide-neutral-100">
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="py-4 flex flex-col sm:flex-row sm:gap-8"
                >
                  <span className="text-sm text-neutral-400 uppercase tracking-wide w-48 shrink-0 mb-1 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="text-neutral-900 font-medium">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
