import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const pamyatki = [
  {
    icon: "BookOpen",
    title: "Как помочь ребёнку с домашним заданием",
    description: "Советы по организации рабочего места, режима и поддержки при выполнении уроков.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "Heart",
    title: "Эмоциональная поддержка школьника",
    description: "Как говорить с ребёнком об учёбе, трудностях и успехах без давления и стресса.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: "Clock",
    title: "Режим дня первоклассника",
    description: "Рекомендации по распорядку дня: сон, прогулки, учёба и отдых в правильном балансе.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: "Shield",
    title: "Безопасность в интернете",
    description: "Памятка для родителей о правилах безопасного поведения детей в сети.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: "Users",
    title: "Взаимодействие с учителем",
    description: "Как выстроить конструктивный диалог со школой и быть в курсе успехов ребёнка.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: "Star",
    title: "Мотивация к учёбе",
    description: "Простые способы поддержать интерес ребёнка к знаниям и новым открытиям.",
    color: "bg-orange-50 text-orange-600",
  },
];

const Parents = () => {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header className="!text-neutral-900 [&_a]:!text-neutral-900 [&_div]:!text-neutral-900" />

      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Страница для родителей</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4">
            Памятки родителям
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl mb-16">
            Полезные материалы, которые помогут вам поддержать ребёнка в учёбе и создать комфортную среду для развития.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pamyatki.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                  <Icon name={item.icon} size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <button className="mt-auto text-sm text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2 cursor-pointer w-fit">
                  <Icon name="Download" size={14} />
                  Скачать памятку
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0">
              <Icon name="MessageCircle" size={24} fallback="MessageCircle" className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-xl mb-1">Есть вопросы?</h3>
              <p className="text-neutral-500 text-sm">
                Если у вас есть вопросы об успехах ребёнка или вы хотите записаться на консультацию — напишите мне.
              </p>
            </div>
            <button className="shrink-0 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-700 transition-colors cursor-pointer">
              Написать
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Parents;
