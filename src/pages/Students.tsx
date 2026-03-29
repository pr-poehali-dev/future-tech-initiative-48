import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const sections = [
  {
    icon: "ClipboardList",
    color: "bg-blue-50 text-blue-600",
    title: "Подготовка к урокам",
    items: [
      "Выполняй домашнее задание в одно и то же время каждый день",
      "Сначала делай сложные задания, пока голова свежая",
      "Проверяй тетради и учебники с вечера — собирай портфель заранее",
      "Повторяй пройденный материал перед сном хотя бы 10 минут",
    ],
  },
  {
    icon: "Star",
    color: "bg-amber-50 text-amber-600",
    title: "Правила поведения на уроке",
    items: [
      "Приходи на урок вовремя и готовым к работе",
      "Слушай учителя внимательно, не перебивай одноклассников",
      "Если не понял — подними руку и спроси, это не стыдно",
      "Не отвлекайся на телефон во время занятий",
    ],
  },
  {
    icon: "Brain",
    color: "bg-purple-50 text-purple-600",
    title: "Советы для хорошей учёбы",
    items: [
      "Читай дополнительные книги по интересным тебе предметам",
      "Делай перерыв 10 минут после каждых 40 минут занятий",
      "Не бойся ошибаться — ошибки помогают учиться",
      "Хвали себя за успехи, даже небольшие",
    ],
  },
  {
    icon: "Users",
    color: "bg-green-50 text-green-600",
    title: "Отношения с одноклассниками",
    items: [
      "Уважай мнение каждого — все люди разные",
      "Помогай тем, кто не справляется, если тебе несложно",
      "Не обижай словом и делом — береги дружбу",
      "Решай конфликты словами, а не ссорами",
    ],
  },
  {
    icon: "Heart",
    color: "bg-rose-50 text-rose-600",
    title: "Забота о себе",
    items: [
      "Спи не менее 8–9 часов — мозг отдыхает и запоминает информацию",
      "Гуляй на свежем воздухе каждый день хотя бы 30 минут",
      "Питайся правильно: не пропускай завтрак перед школой",
      "Если тебе плохо или грустно — скажи взрослому, которому доверяешь",
    ],
  },
  {
    icon: "Lightbulb",
    color: "bg-orange-50 text-orange-600",
    title: "Главное правило",
    items: [
      "Учись для себя, а не для оценки — знания останутся с тобой навсегда",
      "Каждый день ты становишься чуть умнее — цени это",
      "Верь в себя и не сдавайся, даже когда трудно",
      "Школа — это не только уроки, но и друзья, открытия и рост",
    ],
  },
];

const Students = () => {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
            Страница для учеников
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4">
            Памятка ученика
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl mb-16">
            Простые и важные правила, которые помогут тебе учиться с удовольствием,
            дружить и расти каждый день.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${section.color}`}>
                  <Icon name={section.icon} size={22} fallback="Star" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-lg leading-snug">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 bg-neutral-900 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="text-4xl">🌟</div>
            <div>
              <h3 className="font-bold text-xl mb-1">Ты справишься!</h3>
              <p className="text-neutral-300 text-sm leading-relaxed max-w-xl">
                Помни: каждый великий учёный, художник или спортсмен когда-то тоже сидел за школьной партой.
                Всё начинается с желания узнавать новое.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Students;
